import React, { memo, useState } from 'react';
import { palette } from 'styled-theme';
import styled from 'styled-components';
import { DashBoardHeader } from '../../Organism/DashBoardHeader'
import { Greenhouse } from '../../Organism/Greenhouse'
import { Plans } from '../../Molecules/Plans'
import { Notifications } from '../../Molecules/Notifications'
import {init} from '../../../Service/DashBoard'
import { observer } from 'mobx-react'

const Wrap = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`
const Invol = styled.div<{ palette: string }>`
	background: ${palette({ primary: 1 }, 1)};
`

interface DashBoardProps {
	palette: string;
}

export const DashBoard: React.FC<DashBoardProps> = observer(({ palette }) => {
	init()
	const mocEnvironment = {
		condition: 'NORMAL',
		indicators:[
		{
			name: 'temperature',
			curency: 16,
			symbol: '°',
		},
		{
			name: 'humidity',
			curency: 56,
			symbol: '%',
		},
		{
			name: 'illumination',
			curency: 160,
			symbol: 'Lx',
		},
		{
			name: 'pressure',
			curency: 4.6,
			symbol: 'мБар',
		},		
	]}
	const mocSoil = {
		condition: 'NORMAL',
		indicators: [
			{
				name: 'temperature',
				curency: 16,
				symbol: '°',
			},
			{
				name: 'humidity',
				curency: 56,
				symbol: '%',
			},
			{
				name: 'illumination',
				curency: 160,
				symbol: 'Lx',
			},			
		]
	}
	const mocGreen = {
			"greenhouse": [
				{
					"parametrs": {
						"generalCondition": {
							"value": 86,
							"symbol": "%"
						},
						"temperature": {
							"condition": "WARNING",
							"value": 16,
							"symbol": "°C"
						},
						"humidity": {
							"condition": "ERROR",
							"value": 56,
							"symbol": "%"
						},
						"pressure": {
							"condition": "GOOD",
							"value": 3.4,
							"symbol": "мБар"
						},
						"illumination": {
							"condition": "GOOD",
							"value": 148,
							"symbol": "Lx"
						},
						"soil": {
							"condition": "GOOD",
							"value": 35,
							"symbol": "%"
						}
					},
					"bushes": [{
						"generalCondition": {
							"value": 86,
							"symbol": "%"
						},
						"temperature": {
							"condition": "WARNING",
							"value": 16,
							"symbol": "°C"
						},
						"humidity": {
							"condition": "WARNING",
							"value": 56,
							"symbol": "%"
						},
						"pressure": {
							"condition": "WARNING",
							"value": 3.4,
							"symbol": "мБар"
						},
						"illumination": {
							"condition": "WARNING",
							"value": 148,
							"symbol": "Lx"
						},
						"soil": {
							"condition": "WARNING",
							"value": 35,
							"symbol": "%"
						}
					},
						{
							"generalCondition": {
								"value": 86,
								"symbol": "%"
							},
							"temperature": {
								"condition": "WARNING",
								"value": 16,
								"symbol": "°C"
							},
							"humidity": {
								"condition": "WARNING",
								"value": 56,
								"symbol": "%"
							},
							"pressure": {
								"condition": "WARNING",
								"value": 3.4,
								"symbol": "мБар"
							},
							"illumination": {
								"condition": "WARNING",
								"value": 148,
								"symbol": "Lx"
							},
							"soil": {
								"condition": "WARNING",
								"value": 35,
								"symbol": "%"
							}
						},
						{
							"generalCondition": {
								"value": 86,
								"symbol": "%"
							},
							"temperature": {
								"condition": "WARNING",
								"value": 16,
								"symbol": "°C"
							},
							"humidity": {
								"condition": "WARNING",
								"value": 56,
								"symbol": "%"
							},
							"pressure": {
								"condition": "WARNING",
								"value": 3.4,
								"symbol": "мБар"
							},
							"illumination": {
								"condition": "WARNING",
								"value": 148,
								"symbol": "Lx"
							},
							"soil": {
								"condition": "WARNING",
								"value": 35,
								"symbol": "%"
							}
						},
						{
							"generalCondition": {
								"value": 86,
								"symbol": "%"
							},
							"temperature": {
								"condition": "WARNING",
								"value": 16,
								"symbol": "°C"
							},
							"humidity": {
								"condition": "WARNING",
								"value": 56,
								"symbol": "%"
							},
							"pressure": {
								"condition": "WARNING",
								"value": 3.4,
								"symbol": "мБар"
							},
							"illumination": {
								"condition": "WARNING",
								"value": 148,
								"symbol": "Lx"
							},
							"soil": {
								"condition": "WARNING",
								"value": 35,
								"symbol": "%"
							}
						}
				]
				},
			{
				"parametrs": {
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "ERROR",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "GOOD",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "GOOD",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "GOOD",
						"value": 35,
						"symbol": "%"
					}
				},
				"bushes": [{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				},
				{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				},
				{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				},
				{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				}
				]
			},
			{
				"parametrs": {
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "ERROR",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "GOOD",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "GOOD",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "GOOD",
						"value": 35,
						"symbol": "%"
					}
				},
				"bushes": [{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				},
				{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				},
				{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				},
				{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				}
				]
			},
			{
				"parametrs": {
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "ERROR",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "GOOD",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "GOOD",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "GOOD",
						"value": 35,
						"symbol": "%"
					}
				},
				"bushes": [{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				},
				{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				},
				{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				},
				{
					"generalCondition": {
						"value": 86,
						"symbol": "%"
					},
					"temperature": {
						"condition": "WARNING",
						"value": 16,
						"symbol": "°C"
					},
					"humidity": {
						"condition": "WARNING",
						"value": 56,
						"symbol": "%"
					},
					"pressure": {
						"condition": "WARNING",
						"value": 3.4,
						"symbol": "мБар"
					},
					"illumination": {
						"condition": "WARNING",
						"value": 148,
						"symbol": "Lx"
					},
					"soil": {
						"condition": "WARNING",
						"value": 35,
						"symbol": "%"
					}
				}
				]
			}
			]
		}
		const mocPlans = [
			{
				name: 'humidity',
				title: 'Полив участков',
				status: true,
				greenhouse: 1,
				bushes: 2,
				time: '',
			},
			{
				name: 'humidity',
				title: 'Полив участков',
				status: false,
				greenhouse: 3,
				bushes: 1,
				time: '23:00',
			}
		]
	const mocNotific = {
		"notification": [
			{
				"name": "temperature",
				"condition": "WARNING",
				"greenhouse": 0,
				"bush": 0
			},
			{
				"name": "humidity",
				"condition": "ERROR",
				"greenhouse": 2,
				"bush": 0
			}
		]
	}
	return (
		<Invol palette={palette}>
			<DashBoardHeader palette={palette} dataEnvironment={mocEnvironment} dataSoil={mocSoil} />
			<Wrap>
				<Greenhouse palette={palette} data={mocGreen.greenhouse} />
				<Plans palette={palette} data={mocPlans} />
				<Notifications palette={palette} data={mocNotific.notification} />
			</Wrap>
		</Invol>
	)
});