import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create-user.dto';

// update는 create와 동일하나 내부 값이 필수가 아니기 때문에 PartialType를 사용하여 간단하게 구현할 수 있습니다
export class UpdateUserDTO extends PartialType(CreateUserDTO) {}