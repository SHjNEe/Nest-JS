import { IsBoolean } from "class-validator";
import { Expose, Transform } from "class-transformer";

export class ApproveReportDto {
  @IsBoolean()
  approved: boolean;
}
