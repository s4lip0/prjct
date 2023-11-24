import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TitleModuleBase } from "./base/title.module.base";
import { TitleService } from "./title.service";
import { TitleController } from "./title.controller";
import { TitleResolver } from "./title.resolver";

@Module({
  imports: [TitleModuleBase, forwardRef(() => AuthModule)],
  controllers: [TitleController],
  providers: [TitleService, TitleResolver],
  exports: [TitleService],
})
export class TitleModule {}
