import { storiesOf } from '@storybook/react';
import React from 'react';

import { Text } from '../Typography';
import { Bullet, BulletList } from '.';

storiesOf('Foundation|List/BulletList', module)
	.addDecorator(story => (
		<div style={{ maxWidth: '500px', width: '100%' }}>{story()}</div>
	))
	.add('standard', () => (
		<BulletList>
			<Bullet>
				<Text>
					For some, it could be argued that air-conditioning is the
					most important feature of a car, excluding all the
					mechanical bits that make it go, stop and turn.
				</Text>
			</Bullet>
			<Bullet>
				<Text>
					There are many components that have to work together to
					ensure the air-conditioning system is working correctly and,
					with so many contributing parts, it’s clear the system
					should only be serviced or repaired by a qualified
					technician.
				</Text>
			</Bullet>
		</BulletList>
	))
	.add('nested', () => (
		<BulletList>
			<Bullet>
				<Text>
					For some, it could be argued that air-conditioning is the
					most important feature of a car, excluding all the
					mechanical bits that make it go, stop and turn.
				</Text>
			</Bullet>
			<Bullet>
				<BulletList>
					<Bullet>
						<Text>
							For some, it could be argued that air-conditioning
							is the most important feature of a car, excluding
							all the mechanical bits that make it go, stop and
							turn.
						</Text>
					</Bullet>
					<Bullet>
						<BulletList>
							<Bullet>
								<Text>
									For some, it could be argued that
									air-conditioning is the most important
									feature of a car, excluding all the
									mechanical bits that make it go, stop and
									turn.
								</Text>
							</Bullet>
							<Bullet>
								<BulletList>
									<Bullet>
										<Text>
											For some, it could be argued that
											air-conditioning is the most
											important feature of a car,
											excluding all the mechanical bits
											that make it go, stop and turn.
										</Text>
									</Bullet>
								</BulletList>
							</Bullet>
						</BulletList>
					</Bullet>
				</BulletList>
			</Bullet>
			<Bullet>
				<Text>
					For some, it could be argued that air-conditioning is the
					most important feature of a car, excluding all the
					mechanical bits that make it go, stop and turn.
				</Text>
			</Bullet>
		</BulletList>
	));
