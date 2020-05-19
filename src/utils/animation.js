import { TweenMax, Elastic } from 'gsap'

const duration = 0.5;

export default {
    show(target, cb){
        return TweenMax.from(target, duration, {
            opacity: 0,
            height: 0,
            onomplete() {
                cb();
            },
            ease: Elastic.easeOut.config(0.25, 1),
        });
    },
    hide(target, cb) {
        return TweenMax.from(target, duration, {
            opacity: 0,
            height: 0,
            onomplete() {
                cb();
            },
            ease: Elastic.easeOut.config(0.25, 1),
        });
    }
}