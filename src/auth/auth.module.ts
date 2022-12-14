import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports: [AuthService],
  providers: [AuthService]
})
export class AuthModule {}
