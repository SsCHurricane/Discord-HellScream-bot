import { DiscordModule } from "@discord-nestjs/core";
import { Module } from "@nestjs/common";
import { HellDiversAPIModule } from "modules/helldiversAPI/helldiversAPI.module";
import { OpenAiModule } from "modules/openai/openai.module";
import { BotGateway } from "./bot.gateway";
import { BotService } from "./bot.service";
@Module({
	imports: [DiscordModule.forFeature(), HellDiversAPIModule, OpenAiModule],
	providers: [BotService, BotGateway],
	exports: [BotService],
})
export class BotModule {}
