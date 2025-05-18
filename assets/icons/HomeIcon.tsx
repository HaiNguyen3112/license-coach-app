// icons/HomeIcon.tsx
import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

export default function HomeIcon({ color = '#A0A4B0', size = 24 }: { color?: string; size?: number }) {
	return (
		<Svg
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
		>
			<G clipPath="url(#clip0)">
				<Path
					d="M10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13V21H10V13Z"
					fill={color}
				/>
				<Path
					d="M13.228 2.42739C12.8769 2.15039 12.4448 2 12 2C11.5552 2 11.1231 2.15039 10.772 2.42739L2.388 9.04018C1.636 9.63553 2.05 10.8577 3.003 10.8577H4V18.9715C4 19.5095 4.21071 20.0255 4.58578 20.4059C4.96086 20.7863 5.46956 21 6 21H10V14.9146C10 14.3766 10.2107 13.8607 10.5858 13.4803C10.9609 13.0999 11.4696 12.8861 12 12.8861C12.5304 12.8861 13.0391 13.0999 13.4142 13.4803C13.7893 13.8607 14 14.3766 14 14.9146V21H18C18.5304 21 19.0391 20.7863 19.4142 20.4059C19.7893 20.0255 20 19.5095 20 18.9715V10.8577H20.997C21.949 10.8577 22.365 9.63553 21.612 9.04119L13.228 2.42739Z"
					fill={color}
				/>
				<Path
					d="M10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16V21H10V16Z"
					fill="white"
				/>
			</G>
			<Defs>
				<ClipPath id="clip0">
					<Rect
						width="24"
						height="24"
						fill="white"
					/>
				</ClipPath>
			</Defs>
		</Svg>
	);
}
