import React, { useState, useEffect, useCallback } from 'react'

import { useParameter, useChannel } from '@storybook/api'
import { STORY_CHANGED } from '@storybook/core-events'

const ConsumedAddon = () => {
	const componentImportPath = useParameter('componentImportPath', null)
	const [items, setItems] = useState([])
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const handleStateReset = useCallback(() => {
		setItems([])
	}, [])

	const event = useChannel({
		[STORY_CHANGED]: handleStateReset,
	})

	useEffect(() => {
		event(STORY_CHANGED)
	}, [event])

	useEffect(() => {
		setIsLoading(true)
		if (componentImportPath !== null) {
			fetch(`/githubsearch?componentImportPath=${componentImportPath}`)
				.then((response) => {
					if (response.status === 500) {
						setIsLoading(false)
						setError(true)
					}
					return response.json()
				})
				.then((response) => {
					setIsLoading(false)
					setItems(response)
				})
				.catch((e) => {
					console.log(e)
					setIsLoading(false)
					setError(true)
				})
		}
	}, [componentImportPath])

	return componentImportPath === null ? (
		<p style={{ marginLeft: '14px', fontSize: '16px' }}>
      Component import path not set.
		</p>
	) : isLoading ? (
		<p style={{ marginLeft: '14px', fontSize: '16px' }}>Loading...</p>
	) : error ? (
		<p style={{ marginLeft: '14px', fontSize: '16px' }}>
      Oops an error has occurred.
		</p>
	) : items.length > 0 ? (
		<ul>
			{items.map((item) => (
				<li style={{ marginBottom: '8px' }} key={item.itemSha}>
					<a style={{ fontSize: '16px' }} href={item.repositoryUrl}>
						{item.repositoryName}
					</a>
				</li>
			))}
		</ul>
	) : (
		<p style={{ marginLeft: '14px', fontSize: '16px' }}>
      Not consumed in any repository.
		</p>
	)
}

export default ConsumedAddon