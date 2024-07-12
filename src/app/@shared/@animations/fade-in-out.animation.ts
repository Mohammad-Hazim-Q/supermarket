import { AnimationTriggerMetadata, animate, style, transition, trigger } from "@angular/animations"


export const inOutAnimationFactory = (time: number): AnimationTriggerMetadata[] => {
    return [
        trigger(
            'inOutAnimation',
            [
                transition(
                    ':enter',
                    [
                        style({ opacity: 0 }),

                        animate(`${time}s ease-in-out`,
                            style({ opacity: 1 }))

                    ]
                ),
            ]

        )

    ]
}