import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function ProfileIcon({ color = '#A0A4B0', size = 24 }: { color?: string; size?: number }) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>
			<Path
				d="M12 2C6.579 2 2 6.579 2 12C2 17.421 6.579 22 12 22C17.421 22 22 17.421 22 12C22 6.579 17.421 2 12 2ZM12 7C13.727 7 15 8.272 15 10C15 11.728 13.727 13 12 13C10.274 13 9 11.728 9 10C9 8.272 10.274 7 12 7ZM6.894 16.772C7.791 15.452 9.287 14.572 11 14.572H13C14.714 14.572 16.209 15.452 17.106 16.772C15.828 18.14 14.015 19 12 19C9.985 19 8.172 18.14 6.894 16.772Z"
				fill={color}
			/>
		</Svg>
	);
}
