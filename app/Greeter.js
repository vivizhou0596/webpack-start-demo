import React,{Component} from 'react'
import  config from './config.json';
import  styles from './Greeter.css';
// import  './icons/index'
import default32 from './icons/assets/default32.svg';
import Icon from './Icon.jsx'
class Greeter extends Component{
    render(){
        return (
            <div className={styles.root}>
                <p>{config.greetText}</p>
                <div>
                    <Icon name='default32'/>
                    <Icon name='default33'/>
                    <Icon name='user'/>
                    <Icon name='social-qq'/>
                    <div>
                        <svg>
                            <use xlinkHref={`#${default32.id}`} />
                        </svg>
                    </div>
                    <div>
                        <svg>
                            <defs>
                                <g id="shape">
                                    <rect x="0" y="0" width="50" height="50" />
                                    <circle cx="0" cy="0" r="50" />
                                </g>
                            </defs>

                            <use xlinkHref="#shape" x="50" y="50" />
                            <use xlinkHref="#shape" x="200" y="50" />
                        </svg>
                    </div>

                    <div>
                        <h1>垮SVG调用</h1>
                        <svg width="500" height="110">
                            <use xlinkHref="#shape" x="50" y="50" />
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}
export default Greeter