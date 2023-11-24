import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TitleServiceBase } from "./base/title.service.base";

@Injectable()
export class TitleService extends TitleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
