import React, { Component } from 'react'

import ochaLogo from '../assets/images/logo-ocha-lockup-white.png'
import cta from "../assets/images/call-to-action.png"

class Footer extends Component {
  
  render() {
  	let hasCTA = (this.props.hasCTA === undefined) ? true : this.props.hasCTA;

    return (
    	<React.Fragment>
    		{ hasCTA && 
    				<section className='call-to-action'>
		          <div className='grid-container center--vertical'>
		            <div className='col-7'>
		              <h3>Ready to try using HXL tags?</h3>
		              <h1>Call to action call to action</h1>
		              <button className='btn btn--secondary'>Sign up for demo</button>
		            </div>
		            <div className='col-5'>
		              <img src={cta} width='400' alt='CTA' />
		            </div>
		          </div>
		        </section>
    		}
    		
				<footer>
					<div className='grid-container'>
						<div className='col-12'>
							<div className='service'>
								<div className='provided-by'>
									Service provided by
								</div>
								<div className='service-details'>
									<div className='ocha-service'>
										<img className='ocha-logo' src={ochaLogo} alt='OCHA logo'/>
										<div className='ocha-text'>
											OCHA coordinates the global emergency response to save lives and protect people in humanitarian crises. We advocate for effective and principled humanitarian action by all, for all.
										</div>
									</div>
									<div className='license-group'>
										<div className='license'>
											Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license.
										</div>
										<div className='license-cc'>
											<svg width="40" height="40" viewBox="0 0 32 32">
												<path d="M15.886 28.968c-7.159 0.009-12.857-5.804-12.884-12.802-0.027-7.097 5.847-13.062 12.902-12.881 6.356-0.152 12.793 4.975 12.829 12.839 0.035 7.721-6.201 12.836-12.847 12.844zM15.907 0.254c-9.353-0.056-15.873 7.837-15.907 15.828-0.036 8.503 6.961 15.927 15.827 15.918 8.53-0.009 15.954-6.753 15.885-15.803 0.111-8.79-6.935-15.89-15.805-15.943z"></path>
												<path d="M25.263 18.406c-0.958 1.921-3.394 2.767-5.132 2.632-4.489-0.347-5.501-3.918-4.747-6.567 0.701-2.462 3.115-3.831 6.002-3.466 1.667 0.21 2.961 0.886 3.863 2.334-0.818 0.397-1.591 0.773-2.382 1.157-0.165-0.166-0.288-0.268-0.381-0.388-0.535-0.7-1.25-0.982-2.19-0.822-0.93 0.158-1.479 0.714-1.589 1.482-0.117 0.814-0.094 1.668 0.039 2.482 0.126 0.777 0.707 1.336 1.62 1.462 0.99 0.137 1.856-0.059 2.38-0.931 0.065-0.108 0.161-0.201 0.309-0.382 0.728 0.332 1.444 0.658 2.208 1.007z"></path>
												<path d="M16.842 13.347c-0.871 0.415-1.613 0.768-2.391 1.138-0.156-0.15-0.304-0.262-0.412-0.4-0.545-0.698-1.269-0.964-2.203-0.797-0.888 0.159-1.44 0.687-1.541 1.432-0.115 0.841-0.101 1.718 0.030 2.557 0.122 0.784 0.725 1.323 1.637 1.444 0.956 0.126 1.8-0.056 2.326-0.887 0.081-0.128 0.193-0.241 0.346-0.43 0.737 0.339 1.452 0.667 2.206 1.014-0.357 0.81-0.978 1.311-1.659 1.759-2.518 1.661-6.749 0.909-7.962-1.851-1.013-2.305-0.422-5.145 1.656-6.505 2.136-1.398 5.664-1.088 7.33 0.691 0.212 0.226 0.376 0.49 0.636 0.834z"></path>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</React.Fragment>
    )
  }
}

export default Footer
