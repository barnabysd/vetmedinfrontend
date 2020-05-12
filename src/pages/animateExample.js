// import React from "react"
import { Link } from "gatsby"
import { TweenMax, Linear, TimelineLite } from "gsap";
import Layout from '../components/layout'

// import Layout from "../components/layout"
import SEO from "../components/seo"

// const Contact = () => (
//     <Layout>
//         <SEO title="About" />
//         <h1>Contact</h1>
//         <Link to="/">Back to home</Link>
//     </Layout>
// )

// export default Contact;
import React from 'react'
import { navigate } from 'gatsby-link'
// import Layout from '../components/Counter'

class Counter extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this._count = 0;
  }
  
  componentDidMount() {
    TweenMax.to(this, 5, { 
      _count: 100, 
      onUpdate: () => this.setState({ count: ~~this._count }),
      repeat: -1,
      yoyo: true,
      ease: Linear.easeNone,
    });
    
    this.tl = new TimelineLite({ onComplete: this.restart });
    this.tl.to(this.box, 1, { rotation: 45 });
    this.tl.to(this.box, 0.5, { rotation: 0 });
    this.tl.to(this.box, 1, { scaleX: -1, yoyo: true, repeat: 1 });
    this.tl.pause();
  }
  
  componentDidUpdate(prevProps) {
    // Was there a change in the animate prop?
    if(prevProps.animate !== this.props.animate) {
      this.props.animate ? this.tl.resume() : this.tl.pause();
    }
    if(prevProps.restart !== this.props.restart && this.props.restart === true) {
      this.restart();
    }
  }
  
  restart = () => {
    this.tl.restart();
    this.tl.pause();
    this.props.onRestart();
  };
  
  render() {
    return (
      <div className="Box" ref={c => this.box = c } >
        {this.state.count}
      </div>
    );
  }
}

// -- Wrapper component --------------------------
class AnimateCounter extends React.Component {

  constructor(props) {
    super(props);
    this.state = { animate: false };
  }
  
  toggle = () => this.setState({ animate: ! this.state.animate });
  onRestart = () => this.setState({ animate: false });
  
  render() {
    return (
      <div>
        <Counter 
          animate={this.state.animate} 
          restart={this.state.restart}
          onRestart={this.onRestart}
        />
        <p>Actions below control timeline (intentionally seperate from counter)</p>
        <a href="#" onClick={this.toggle}>
          {this.state.animate ? "Pause timeline" : "Start timeline"}
        </a>
      </div>
    );
  }
}

// export default AnimateCounter

const AnimateExample = () => {
    return (
    <Layout>
        <SEO title="About" />
        <h1>About</h1>
        <AnimateCounter />
        <Link to="/">Back to home</Link>
    </Layout>
    )
}

export default AnimateExample

