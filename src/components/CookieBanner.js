
import React, {useRef,createRef} from 'react'
import { Link } from "gatsby"
import DarkBlueRoundedButtonWithBLCorner from '../components/DarkBlueRoundedButtonWithBLCorner'
import CustomFluidImage from '../components/CustomFluidImage'
import { render } from 'react-dom'
import GSAP from 'react-gsap-enhancer'
import animation from '../utils/animation'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CloseButton from '@material-ui/icons/Close';
import styled from 'styled-components'


function createAnim({target}) {
    var box = target.find({name: 'box'})
  
    return new TimelineMax({repeat: -1})
      .to(box, 1, {scale: 1.23, y: '+=120'})
      .to(box, 1, {scale: 1, y: '-=120'})
      .to(box, 1, {rotation: 90}, 1)
}

const StyledLink = styled(props => <Link {...props} />)`
  color: #092178 !important;
  text-decoration: underline;
`;

class CookieBanner extends React.Component {
    constructor(props) {
      super(props)
      this.state = {x: 0, y: 0}
      this.dom = {}
    }

    //componentWillEnter

    componentWillEnter(cb) {
        this.dom.root = ReactDOM.findDOMNode(this)
        animation.show(this.dom.root,cb)
    }

    componentWillLeave(cb) {
        animation.hide(this.dom.root,cb)
    }
  
    componentDidMount() {
      var rootNode = document.querySelector('.cookieBanner')
      var {top, left} = rootNode.getBoundingClientRect()
      rootNode.addEventListener('mousemove', e => this.setState({
        x: e.clientX - 60 - left,
        y: e.clientY - 60 - top
      }))
  
      //this.jumpAnim = this.addAnimation(createAnim)
    }

    dismiss() {
        this.props.unmountMe();
    } 
  
    handleClick = () => {
      //this.jumpAnim.paused(!this.jumpAnim.paused())
      //const dummy = () => { console.log("here")}
      //animation.hide(this.dom.root,dummy)
      this.dismiss()
    }
  
    render () {
      var {x, y} = this.state
  
      var style = {
        backgroundColor: 'red',
        width: 123,
        height: 123,
        transform: `translate(${x}px, ${y}px)`
      }
  
      var containerStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
      }
  
    //   return (
    //     <div onClick={this.handleClick} style={containerStyle}>
    //       <div>Click to pause!</div>
    //       <div name='box' style={style}/>
    //     </div>
    //   )
    const banner = createRef(null)
      return ( 
      <TransitionGroup component="section">
          <section>
            <div ref={banner} className="cookieBanner" style={{position: 'absolute',width: '100%', height: '300px', backgroundColor: '#fc9a5c',padding:'2rem'}}>
                    <div style={{position: 'relative',width: '100%', minHeight: '100%'}}>
                        <div style={{width: '800px', height: '100px', margin: 'auto'}}> 
                            <h1 style={{fontSize: '1rem', fontWeight:'700', paddingLeft:'0.5rem'}}>By clicking “Accept All Cookies”, you agree to the storing of cookies 
                            on your device to enhance site navigation, analyse site usage, and assist in our marketing efforts.</h1>
                        </div>
                        <div style={{display:'flex',flexDirection:'row',  width: '800px', height: '50px', margin: 'auto'}}> 
                            <div style={{display:'flex',flexDirection:'row', width: '200px', height: '50px',alignItems:'center',justifyContent:'flex-start'}}><DarkBlueRoundedButtonWithBLCorner buttonText="Accept Cookies" /></div>
                            <div style={{display:'flex',flexDirection:'row', width: '200px', height: '50px',alignItems:'center',justifyContent:'flex-end'}}><StyledLink to="/">Cookie Settings</StyledLink></div>
                        </div>
                        <div style={{position: 'absolute',right: '0',top: '0', width: '30px', height: '30px'}}>
                    
                            <CloseButton onClick={this.handleClick} />
                        </div>
                    </div>
            </div>
        </section>
      </TransitionGroup>
)
    }
  }
  
export default  CookieBanner
