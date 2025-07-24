import { ObjectId } from 'mongodb';
import { getDatabase } from '../database.js';
import { createUserSchema, updateUserSchema } from '../schemas/user.js';
import { HTTP_STATUS, createSuccessResponse, createErrorResponse } from '@node-cli/shared-utils';

export async function userRoutes(server) {
  const db = getDatabase();
  const users = db.collection('users');

  server.get('/', async (_request, _reply) => {
    const allUsers = await users.find({}).toArray();
    return createSuccessResponse(allUsers);
  });

  server.get('/:id', async (request, reply) => {
    const { id } = request.params;
    
    if (!ObjectId.isValid(id)) {
      reply.status(HTTP_STATUS.BAD_REQUEST);
      return createErrorResponse('Invalid user ID format');
    }

    const user = await users.findOne({ _id: new ObjectId(id) });
    
    if (!user) {
      reply.status(HTTP_STATUS.NOT_FOUND);
      return createErrorResponse('User not found');
    }

    return createSuccessResponse(user);
  });

  server.post('/', async (request, reply) => {
    try {
      const validatedData = await createUserSchema.validate(request.body);
      
      const existingUser = await users.findOne({ email: validatedData.email });
      if (existingUser) {
        reply.status(HTTP_STATUS.BAD_REQUEST);
        return createErrorResponse('User with this email already exists');
      }

      const newUser = {
        ...validatedData,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      const result = await users.insertOne(newUser);
      const createdUser = await users.findOne({ _id: result.insertedId });

      reply.status(HTTP_STATUS.CREATED);
      return createSuccessResponse(createdUser);
      
    } catch (error) {
      if (error && typeof error === 'object' && 'messages' in error) {
        reply.status(HTTP_STATUS.BAD_REQUEST);
        return createErrorResponse(`Validation failed: ${JSON.stringify(error.messages)}`);
      }
      
      reply.status(HTTP_STATUS.INTERNAL_SERVER_ERROR);
      return createErrorResponse('Failed to create user');
    }
  });

  server.put('/:id', async (request, reply) => {
    try {
      const { id } = request.params;
      
      if (!ObjectId.isValid(id)) {
        reply.status(HTTP_STATUS.BAD_REQUEST);
        return createErrorResponse('Invalid user ID format');
      }

      const validatedData = await updateUserSchema.validate(request.body);
      
      const updateData = {
        ...validatedData,
        updatedAt: new Date()
      };

      const result = await users.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: updateData },
        { returnDocument: 'after' }
      );

      if (!result) {
        reply.status(HTTP_STATUS.NOT_FOUND);
        return createErrorResponse('User not found');
      }

      return createSuccessResponse(result);
      
    } catch (error) {
      if (error && typeof error === 'object' && 'messages' in error) {
        reply.status(HTTP_STATUS.BAD_REQUEST);
        return createErrorResponse(`Validation failed: ${JSON.stringify(error.messages)}`);
      }
      
      reply.status(HTTP_STATUS.INTERNAL_SERVER_ERROR);
      return createErrorResponse('Failed to update user');
    }
  });

  server.delete('/:id', async (request, reply) => {
    const { id } = request.params;
    
    if (!ObjectId.isValid(id)) {
      reply.status(HTTP_STATUS.BAD_REQUEST);
      return createErrorResponse('Invalid user ID format');
    }

    const result = await users.findOneAndDelete({ _id: new ObjectId(id) });
    
    if (!result) {
      reply.status(HTTP_STATUS.NOT_FOUND);
      return createErrorResponse('User not found');
    }

    return createSuccessResponse({ message: 'User deleted successfully', deletedUser: result });
  });
}