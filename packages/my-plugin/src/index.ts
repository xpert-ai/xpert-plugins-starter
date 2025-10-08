import { z } from 'zod';
import type { XpertPlugin } from '@xpert-ai/plugin-sdk';
import { MyPlugin } from './lib/my-plugin';
import { svg } from './lib/types';

const ConfigSchema = z.object({
});

const plugin: XpertPlugin<z.infer<typeof ConfigSchema>> = {
  meta: {
    name: '@xpert-ai/my-plugin',
    version: '1.0.0',
    category: 'tools',
    icon: {
      type: 'svg',
      value: svg
    },
    displayName: 'My Plugin',
    description: 'Integrate My Plugin functionality',
    keywords: ['demo', 'toolset'],
  },
  config: {
    schema: ConfigSchema,
  },
  register(ctx) {
    ctx.logger.log('register my plugin');
    return { module: MyPlugin, global: true };
  },
  async onStart(ctx) {
    ctx.logger.log('my plugin started');
  },
  async onStop(ctx) {
    ctx.logger.log('my plugin stopped');
  },
};

export default plugin;