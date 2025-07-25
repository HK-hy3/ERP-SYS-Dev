import { UserRole } from '@repo/db/prisma/client';

export interface RequestUser {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  sub: string;
}
