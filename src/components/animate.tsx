import { animated, useInView } from "@react-spring/web"
import { FC, HTMLProps, ReactNode } from "react"

export type AnimationType =
	| "left-to-right"
	| "right-to-left"
	| "top-to-bottom"
	| "bottom-to-top"

export interface AnimateProps extends HTMLProps<HTMLDivElement> {
	children?: ReactNode
	type?: AnimationType
	delay?: number
	duration?: number
}

const animations: Record<AnimationType, object> = {
	"left-to-right": {
		from: {
			opacity: 0,
			x: -200,
		},
		to: {
			opacity: 1,
			x: 0,
		},
	},
	"right-to-left": {
		from: {
			opacity: 0,
			x: 200,
		},
		to: {
			opacity: 1,
			x: 0,
		},
	},
	"top-to-bottom": {
		from: {
			opacity: 0,
			y: -200,
		},
		to: {
			opacity: 1,
			y: 0,
		},
	},
	"bottom-to-top": {
		from: {
			opacity: 0,
			y: 200,
		},
		to: {
			opacity: 1,
			y: 0,
		},
	},
}

export const Animate: FC<AnimateProps> = ({
	children,
	ref,
	delay,
	duration = 500,
	type = "left-to-right",
	...props
}) => {
	const animation = animations[type]
	const [animateRef, springs] = useInView(() => ({
		...animation,
		trail: delay,
		config: { duration },
	}))

	return (
		<animated.div ref={animateRef} style={springs} {...props}>
			{children}
		</animated.div>
	)
}
