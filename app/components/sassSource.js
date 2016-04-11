export default {
bounceIn:`
.bounceIn
    animation: bounceIn 1s
    animation-fill-mode: both
@keyframes bounceIn
    0%
        opacity: 0
        transform: scale(0.3)
    50%
        opacity: 1
        transform: scale(1.05)
        70%
        transform: scale(0.9)
    100%
        transform: scale(1)
`,
"bounceInDown":`
.bounceInDown
    opacity: 0
    animation: bounceInDown 0.5s
    animation-fill-mode: both
@keyframes bounceInDown
    0%
        opacity: 0
        transform: translateY(-500px)
    60%
        opacity: 0.7
        transform: translateY(30px)
    80%
        opacity: 0.8
        transform: translateY(-10px)
    100%
        opacity: 1
        transform: translateY(0)
`,
bounceInUp:
`
.bounceInUp
    animation: bounceInUp 1s
    animation-fill-mode: both  
@keyframes bounceInUp
    0%
        opacity: 0
        transform: translateY(2000px)
    60%
        opacity: 1
        transform: translateY(-30px)
    80%
        transform: translateY(10px)
    100%
        transform: translateY(0)

`,
bounceInRight:
`
.bounceInRight
    animation: bounceInRight 1s
    animation-fill-mode: both  
@keyframes bounceInRight
    0%
        opacity: 0
        transform: translateX(2000px)
    60%
        opacity: 1
        transform: translateX(-30px)
    80%
        transform: translateX(10px)
    100%
        transform: translateX(0)
`,
bounceInLeft:
`
.bounceInLeft
    animation: bounceInLeft 1s
    animation-fill-mode: both 
@keyframes bounceInLeft
    0%
        opacity: 0
        transform: translateX(-2000px)
    60%
        opacity: 1
        transform: translateX(30px)
    80%
        transform: translateX(-10px)
    100%
        transform: translateX(0)
`,
"bounceOutUp":`
.bounceOutUp
    animation: bounceOutUp 1s
    animation-fill-mode: both
@keyframes bounceOutUp
    0%
        opacity: 1
        transform: translateY(0px)
    20%
        transform: translateY(-10px)
    40%
        transform: translateY(30px)
    100%
        transform: translateY(-500px)
        opacity: 0`
,
bounceOut:`.bounceOut
    animation: bounceOut 1s
    animation-fill-mode: both  
@keyframes bounceOut
    0%
        transform: scale(1)
    25%
        transform: scale(0.95)
    50%
        opacity: 1
        transform: scale(1.1)
    100%
        opacity: 0
        transform: scale(0.3)
`,
bounceOutUp:`
.bounceOutUp
    animation: bounceOutUp 1s
    animation-fill-mode: both
@keyframes bounceOutUp
    0%
        transform: translateY(0)
    20%
        opacity: 1
        transform: translateY(20px)
    100%
        opacity: 0
        transform: translateY(-2000px)
`,
bounceOutDown:`
.bounceOutDown
    animation: bounceOutDown 1s
    animation-fill-mode: both
@keyframes bounceOutDown
    0%
        transform: translateY(0)
    20%
        opacity: 1
        transform: translateY(-20px)
    100%
        opacity: 0
        transform: translateY(2000px)
`,
bounceOutLeft:`
.bounceOutLeft
    animation: bounceOutLeft 1s
    animation-fill-mode: both
@keyframes bounceOutLeft
    0%
        transform: translateX(0)
    20%
        opacity: 1
        transform: translateX(20px)
    100%
        opacity: 0
        transform: translateX(-2000px)
`,
bounceOutRight:`
.bounceOutRight
    animation: bounceOutRight 1s
    animation-fill-mode: both
@keyframes bounceOutRight
    0%
        transform: translateX(0)
    20%
        opacity: 1
        transform: translateX(-20px)
    100%
        opacity: 0
        transform: translateX(2000px)
`,
rotateInUpRight:`
.rotateInUpRight
    animation: rotateInUpRight 1s
    animation-fill-mode: both
@keyframes rotateInUpRight
    0%
        transform-origin: right bottom
        transform: rotate(-90deg)
        opacity: 0
    100%
        transform-origin: right bottom
        transform: rotate(0)
        opacity: 1`,
flash:`
.flash
    animation: flash 2s
    animation-fill-mode: both 
@keyframes flash
    0%,20%,40%,60%,80%,100%
        opacity: 1
    10%,30%,50%,70%,90%
        opacity: 0
`,
shake:`
.shake
    animation: shake 1s
    animation-fill-mode: both
@keyframes shake
    0%
        transform: translateX(0)
    10%
        transform: translateX(-10px)
    20%
        transform: translateX(10px)
    30%
        transform: translateX(-10px)
    40%
        transform: translateX(10px)
    50%
        transform: translateX(-10px)
    60%
        transform: translateX(10px)
    70%
        transform: translateX(-10px)
    80%
        transform: translateX(10px)
    90%
        transform: translateX(-10px)
    100%
        transform: translateX(0)
`,
fadeIn:`
.fadeIn
    animation: fadeIn 1s
    animation-fill-mode: both
@keyframes fadeIn
    0%
        opacity: 0
    100%
        opacity: 1
`,
fadeOut:`
.fadeOut
    animation: fadeOut 1s
    animation-fill-mode: both  
@keyframes fadeOut
    0%
        opacity: 1
    100%
        opacity: 0
`,
fadeInUp:`
.fadeInUp
    animation: fadeInUp 1s
    animation-fill-mode: both  
@keyframes fadeInUp
    0%
        opacity: 0
        transform: translateY(40px)
    100%
        opacity: 1
        transform: translateY(0)
`,
fadeOutUp:
`
.fadeOutUp
    animation: fadeOutUp 1s
    animation-fill-mode: both  
@keyframes fadeOutUp
    0%
        opacity: 1
        transform: translateY(0)
    100%
        opacity: 0
        transform: translateY(-40px)`,
fadeInDown:
`
.fadeInDown
    animation: fadeInDown 1s
    animation-fill-mode: both 
@keyframes fadeInDown
    0%
        opacity: 0
        transform: translateY(-40px)
    100%
        opacity: 1
        transform: translateY(0)`,
fadeOutDown:
`
.fadeOutDown
    animation: fadeOutDown 1s
    animation-fill-mode: both 
@keyframes fadeOutDown
  0%
    opacity: 1
    transform: translateY(0)
  100%
    opacity: 0
    transform: translateY(40px)`,
fadeInRight:
`.fadeInRight
    animation: fadeInRight 1s
    animation-fill-mode: both  
@keyframes fadeInRight
  0%
    opacity: 0
    transform: translateX(40px)
  100%
    opacity: 1
    transform: translateX(0)
`,
fadeOutLeft:
`.fadeOutLeft
    animation: fadeOutLeft 1s
    animation-fill-mode: both 
@keyframes fadeOutLeft
  0%
    opacity: 1
    transform: translateX(0)
  100%
    opacity: 0
    transform: translateX(-40px)
`,
fadeInLeft:
`.fadeInLeft
    animation: fadeInLeft 1s
    animation-fill-mode: both 
@keyframes fadeInLeft
    0%
        opacity: 0
        transform: translateX(-20px)
    100%
        opacity: 1
        transform: translateX(0)
.fadeOutRight
        animation: fadeOutRight 1s
        animation-fill-mode: both`,
fadeOutRight:
`
@keyframes fadeOutRight
    0%
        opacity: 1
        transform: translateX(0)
    100%
        opacity: 0
        transform: translateX(20px)
`,
rotateIn:`
.rotateIn
    animation: rotateIn 1s
    animation-fill-mode: both   
@keyframes rotateIn
  0%
    transform-origin: center center
    transform: rotate(-200deg)
    opacity: 0
  100%
    transform-origin: center center
    transform: rotate(0)
    opacity: 1`,
rotateOut:`
.rotateOut
    animation: rotateOut 1s
    animation-fill-mode: both  
@keyframes rotateOut
  0%
    transform-origin: center center
    transform: rotate(0)
    opacity: 1
  100%
    transform-origin: center center
    transform: rotate(200deg)
    opacity: 0`,
tada:`.tada
    animation: tada 1s
    animation-fill-mode: both
@keyframes tada
    0%
        transform: scale(1)
    10%
        transform: scale(0.9) rotate(-3deg)
    20%
        transform: scale(0.9) rotate(-3deg)
    30%
        transform: scale(1.1) rotate(3deg)
    40%
        transform: scale(1.1) rotate(-3deg)
    50%
        transform: scale(1.1) rotate(3deg)
    60%
        transform: scale(1.1) rotate(-3deg)
    70%
        transform: scale(1.1) rotate(3deg)
    80%
        transform: scale(1.1) rotate(-3deg)
    90%
        transform: scale(1.1) rotate(3deg)
    100%
        transform: scale(1) rotate(0)
`

}