import React from 'react'

import { AddonPanel } from '@storybook/components'
import { addons, types } from '@storybook/addons'

import ConsumedAddon from './ConsumedAddon'

addons.register('consumed-addon', () => {
	addons.add('consumed-addon', {
		type: types.PANEL,
		title: 'Consumed',
		render: ({ active, key }) => (
			<AddonPanel active={active} key={key}>
				<ConsumedAddon />
			</AddonPanel>
		),
		paramKey: 'componentImportPath',
	})
})
