import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configSwagger = new DocumentBuilder()
  .setTitle('API users')
  .setDescription('Descrição qualquer')
  .setVersion('1.0')
  .addTag('user')
  .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('docs', app, document)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
