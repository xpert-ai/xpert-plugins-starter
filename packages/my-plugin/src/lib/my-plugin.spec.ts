import { Test, TestingModule } from '@nestjs/testing';
import { MyPlugin } from './my-plugin';

describe('MyPluginModule', () => {
	let module: TestingModule;

	beforeEach(async () => {
		module = await Test.createTestingModule({
			imports: [MyPlugin],
		}).compile();
	});

	it('should be defined', () => {
		const myPluginModule = module.get(MyPlugin);
		expect(myPluginModule).toBeDefined();
	});
});