import React from 'react'

export default function Faq() {
  return (
    <div>
      <div className="faqs">
		<div className="container">
			<div className="faqs-title">
				<h1>FAQ’S</h1>
				<h5>Frequently Asked Questions</h5>
				
			</div>

			<div className="content">
				<div className="accordion accordion-flush" id="accordionFlushExample">
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingOne">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
								data-bs-target="#flush-collapseOne" aria-expanded="false"
								aria-controls="flush-collapseOne">
								Get in touch via Call?
							</button>
						</h2>
						<div id="flush-collapseOne" className="accordion-collapse collapse"
							aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">Call us between 10AM to 8PM on all days except public holidays. Call on 9941593415

							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingTwo">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
								data-bs-target="#flush-collapseTwo" aria-expanded="false"
								aria-controls="flush-collapseTwo">
								Get in touch via Email?
							</button>
						</h2>
						<div id="flush-collapseTwo" className="accordion-collapse collapse"
							aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">For any support related queries, Email us at admin@upigateway.com

							</div>
						</div>
					</div>
					<div className="accordion-item">
						<h2 className="accordion-header" id="flush-headingThree">
							<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
								data-bs-target="#flush-collapseThree" aria-expanded="false"
								aria-controls="flush-collapseThree">
								Online Chat ?
							</button>
						</h2>
						<div id="flush-collapseThree" className="accordion-collapse collapse"
							aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
							<div className="accordion-body">You can reach us via online chat on whatsapp. Start chat

							</div>
						</div>
					</div>

					
				</div>
			</div>

		</div>
	</div>
    </div>
  )
}
