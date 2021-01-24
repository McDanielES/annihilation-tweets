import { Component } from 'react';
import ReactModal from 'react-modal';

class Curator extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <div onClick={this.handleOpenModal} className="row mr-0 Navigation-links Navigation-footer">
          <div className="col-1">
            <i className="fas fa-book"></i>
          </div>
          <div className="col ml-3 px-0">
            <button><strong>View Curator's Essay</strong></button>
          </div>
        </div>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Curator's Essay"
           ariaHideApp={ false }
           onRequestClose={ this.handleCloseModal }
           className="Modal"
           overlayClassName="Overlay"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="offset-lg-1 col-lg-4 offset-1 col-10">
                <a href="EricMcDanielCuratorsEssay.pdf" className="btn btn-secondary px-lg-3">View/Download PDF Version <i className="fas fa-file-download ml-1"></i></a>
              </div>
              <div className="offset-lg-2 col-lg-4 offset-1 col-10">
                <button className="btn btn-primary px-lg-3" onClick={this.handleCloseModal}>Close Curator's Essay <i className="far fa-times-circle ml-1"></i></button>
              </div>
            </div>


          </div>
          
          <h1 className="Curator-Essay">Curator's Essay</h1>
          <p className="Curator-Essay-paragraph">Annihilation - A Literary Analysis via Twitter Feed is a collection of Tweets crafted by Eric S McDaniel based on Jeff VanderMeer’s 2014 novel. The Tweets serve as an alternate perspective of VanderMeer’s successful novel since a Twitter feed forces viewers to engage with one person and their characteristics  of the whole group, and it also gives the book a fresh new modern retelling of the novel as well since the book had some technological restraints that could not make something like this possible.</p>
          <p className="Curator-Essay-paragraph">In VanderMeer’s book, all expedition teams after the first were prohibited from using technology, including cellphones, computers, and even compasses. McDaniel acknowledges that in order to make his work come alive, there had to be some mild artistic liberty in play. By allowing the characters in Annihilation to Tweet their activities, McDaniel provides a Twitter feed that follows along with VanderMeer’s novel however with a technological screen in front. McDaniel finds this “ironic” and something worth exploring.</p>
          <p className="Curator-Essay-paragraph">In addition, McDaniel found subtle “irony” in how Twitter as a mode is used compared to the natural characteristics of the characters of the book. In the book, the biologist is somewhat introspective and focuses on all things natural. She is nature-focused, she is not much of a people person. McDaniel keeps as much of the characteristics of the people involved as much as possible, however the large difference is the in the novel, she collects all of her thoughts into her journal, which is a private area to collect thoughts. The use of Twitter of the complete. Twitter is a public website, where millions of people log on daily to view what other people are viewing, seeing, and sharing daily. Using Twitter is the opposite of what VanderMeer sets us up predict the biologist to  want to be involved with. She is someone who would spend her time doing research alone, not broadcasting her thoughts to the world. Using this contrast made for a good opportunity for McDaniel to create Annihilation - A Literary Analysis via Twitter Feed, where viewers can dig into the mind of a character who normally is introverted but now chooses to be.</p>
          <p className="Curator-Essay-paragraph">McDaniel’s arrangement focuses on the goals that VanderMeer tries to achieve when he authored his book. One common keyword that viewers will find is revelation or coming to acceptance. The biologist encounters multiple moments where she has to face what is happening, so she Tweets that moment, such as she prepares herself to read her husbands novel. This is similar to VanderMeer’s larger theme about coming to acceptance about global warming and mankind’s effort to slow down the consequences of Earths destruction.</p>
          <p className="Curator-Essay-paragraph">In order to make this Twitter Feed, McDaniel designed this using a popular JavaScript library React.js, and served this on a private webserver using Express.js for back-end routing. The choice of using web frameworks instead of designing Tweets on Word or other applications was so that he can keep Twitter exactly how it should be viewed: online. Viewed of this work can enjoy it the same way they enjoy the real Twitter.</p>
        </ReactModal>
      </div>
    );
  }
}

export default Curator;