import { PartialType } from '@nestjs/mapped-types';
import { CreateThDto } from './create-th.dto';

export class UpdateThDto extends PartialType(CreateThDto) {}
