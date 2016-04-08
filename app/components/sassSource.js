export default {
"bounce-enter":`
.bounce-enter
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
"bounce-leave":`
.bounce-leave
    animation: bounceOutUp 0.5s
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
        transform: translateY(-500px)`,
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
    animation: fadeIn 5s
    animation-fill-mode: both
@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
`
}