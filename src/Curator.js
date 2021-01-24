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
                <a href="EricMcDanielExam8Page1.pdf" className="btn btn-secondary px-lg-3">View/Download PDF Version <i class="fas fa-file-download ml-1"></i></a>
              </div>
              <div className="offset-lg-2 col-lg-4 offset-1 col-10">
                <button className="btn btn-primary px-lg-3" onClick={this.handleCloseModal}>Close Curator's Essay <i class="far fa-times-circle ml-1"></i></button>
              </div>
            </div>


          </div>
          

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non elementum ligula, in cursus nibh. Suspendisse potenti. Nullam non sapien ut neque fermentum pellentesque quis non magna. Pellentesque dictum sagittis faucibus. Ut molestie tortor eu metus luctus, sed porta justo interdum. Nam nunc augue, lacinia eu elementum nec, malesuada non ligula. Pellentesque turpis libero, finibus sed augue id, fermentum interdum lectus. Ut nec arcu suscipit, mollis neque sit amet, volutpat eros. Phasellus porta tellus nunc, ut scelerisque mi pharetra et. Donec tempus suscipit dolor, quis aliquam nisi sagittis in. Vivamus ac malesuada ex. Sed non nunc magna. In quis augue leo. Suspendisse pulvinar dolor sodales iaculis ultrices. Proin non tellus placerat, faucibus mauris at, scelerisque lacus. Quisque sit amet maximus ipsum.

Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla viverra purus sit amet eros ornare blandit. Curabitur sollicitudin efficitur ex, et rutrum lacus consequat ut. Fusce varius, magna at consectetur porta, erat augue interdum neque, quis gravida ex enim eu sapien. Cras sit amet lacus nulla. Aenean dictum tellus eget tellus lacinia vulputate. Donec id dolor eu libero fringilla molestie. Sed hendrerit, libero vel condimentum pharetra, justo sapien scelerisque justo, non eleifend enim odio non eros. Suspendisse mollis purus in erat rhoncus suscipit. Phasellus bibendum magna ac diam sodales, sed tincidunt sapien rutrum. Sed eget tincidunt lorem, vel interdum lacus. Ut vel gravida nisl, at euismod lectus. Integer vel odio eu turpis pellentesque porta sit amet sit amet est.

Maecenas sagittis et risus vitae eleifend. Duis at metus eu arcu feugiat bibendum. Mauris tempor faucibus lacus, at convallis lectus convallis at. Mauris ac leo dolor. Duis leo lectus, porta eget congue eu, sollicitudin a elit. Curabitur sit amet nisl purus. Cras porta, dolor a gravida feugiat, arcu ligula dignissim neque, sed consectetur justo arcu a libero. Pellentesque vehicula luctus velit, nec varius nisl porta eu. Quisque luctus tempor mauris, vehicula mollis nunc lobortis et. Aenean pellentesque lorem quis erat varius, et venenatis neque posuere.

Vestibulum tristique nisl leo, vel pharetra magna rutrum quis. Proin ac ex ultrices, rutrum nunc et, imperdiet tellus. Praesent tellus urna, consectetur a rhoncus nec, mattis ut purus. Donec eget nibh id mi feugiat feugiat in nec leo. Sed a odio non sem mattis volutpat quis id purus. Fusce ac orci mollis, pretium elit ut, eleifend diam. Donec felis purus, maximus vel dapibus vel, tristique eget orci. Vestibulum mattis felis ac rhoncus semper.

Aenean consectetur at turpis vel tempor. Pellentesque elementum fermentum ex vitae varius. Nulla venenatis gravida turpis, in pulvinar purus mollis sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec elementum dictum purus eget consectetur. Donec mattis libero et lorem iaculis facilisis. Duis vitae nisi libero. Nam maximus erat nibh, ac imperdiet diam accumsan et. Ut vel tortor tempor, facilisis augue vel, feugiat tortor.

Quisque eget augue sem. Sed quam mauris, molestie ac lobortis non, mollis congue libero. Vestibulum vel mauris et ante ultrices venenatis. In at nunc mollis, euismod augue in, elementum diam. Morbi sagittis tempor erat, sit amet vehicula neque pulvinar id. Integer id condimentum est. Vestibulum laoreet odio at feugiat rutrum. Pellentesque tincidunt, nulla mollis vestibulum sagittis, tellus nisi sodales enim, eu laoreet tortor nibh in turpis.

Integer tincidunt metus non fringilla aliquam. Integer ut semper nunc. Cras iaculis libero sed ex auctor, quis eleifend odio aliquam. Nam non lectus eros. Proin suscipit urna sit amet orci consectetur efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur rhoncus risus ipsum, eget lobortis elit euismod non. Vestibulum vel sem sodales, laoreet justo quis, euismod ante. Nam a bibendum velit. Maecenas efficitur sagittis iaculis. Duis aliquam augue sit amet pulvinar facilisis. Donec molestie dignissim mi, sed faucibus ex imperdiet eget. Ut neque leo, commodo vel orci a, tincidunt placerat velit. Nullam non mauris quis tortor commodo posuere. Nulla tristique dui aliquam nulla sollicitudin lobortis. Aenean non tristique sapien.

Etiam convallis sodales volutpat. Ut condimentum diam eu erat vestibulum, vitae congue nisl egestas. Suspendisse potenti. Nunc volutpat sapien non porta hendrerit. Quisque luctus ultrices massa quis pharetra. Suspendisse id ante velit. Duis arcu metus, porta venenatis ante pretium, mollis fermentum lorem. Vivamus ut mi eget lacus ornare porttitor.

Nunc ut nunc nisi. Duis ut nunc ac turpis cursus efficitur. Donec aliquet luctus velit, et maximus turpis vestibulum a. Donec vitae fringilla mi. Nulla tincidunt gravida erat, sed tempor turpis fringilla quis. Pellentesque id aliquet ante. Integer condimentum nulla ut nunc ultricies, nec molestie arcu mattis. Aliquam ultrices sed nibh non lobortis. Vestibulum eu finibus velit. Nam ac tellus tellus. Nulla lorem orci, rutrum eu mattis at, lacinia in odio. In magna dolor, posuere sit amet orci eget, viverra ultricies tortor. Pellentesque interdum non lectus nec pulvinar. Vivamus pharetra metus risus, vitae mattis lorem blandit sed.

Duis tempus metus velit, non commodo dui ornare ut. Vivamus malesuada iaculis condimentum. In aliquam magna et est suscipit, at maximus nibh porta. Nam nec rhoncus magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sem tellus, feugiat vitae velit in, scelerisque luctus justo. Curabitur tempus interdum lorem, sed tincidunt mi tempus et. Fusce viverra eu quam sed volutpat. Cras tincidunt, arcu nec ultrices pretium, risus risus luctus arcu, vulputate varius velit ex at sapien. Aenean ut nulla vitae velit dapibus ultrices id at est.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse tempor dolor ut finibus aliquam. Integer et tincidunt ligula. Pellentesque consectetur ornare nisi semper imperdiet. Donec dictum in enim id condimentum. Quisque tincidunt libero magna, vitae scelerisque nulla molestie quis. Proin placerat justo risus, sit amet vulputate nunc sollicitudin sit amet. Suspendisse pellentesque magna nec sem bibendum, eu tincidunt nisi viverra. Nulla id enim justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus imperdiet nunc lacinia massa ultrices ultricies. Aliquam eu arcu in nunc euismod consectetur quis eget eros.

Duis ac gravida ex, non maximus nulla. Nulla facilisi. Donec nisi augue, posuere eu urna vitae, placerat accumsan eros. Donec pellentesque et nibh in dignissim. Nunc rhoncus, nisl quis pretium gravida, lacus metus efficitur est, eleifend molestie elit risus sed dolor. Sed scelerisque sem nulla, viverra ornare dolor vehicula nec. Nunc odio sapien, gravida bibendum mi eu, aliquam mattis arcu. Duis iaculis, lorem a consequat lobortis, risus augue scelerisque lectus, a rutrum libero mi at mi.

Curabitur malesuada condimentum libero ac placerat. Proin leo nisl, viverra id nibh non, vulputate scelerisque neque. Aliquam auctor felis nibh, non lacinia ligula posuere eu. Fusce vitae arcu laoreet, ullamcorper massa quis, pharetra velit. Sed molestie nunc sed ligula rhoncus gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla lacinia tristique eros, a scelerisque urna venenatis a. Praesent hendrerit volutpat eros sed pellentesque. Morbi sollicitudin lorem non eleifend congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus vitae dignissim augue.

Aliquam ut posuere nulla. Quisque sit amet turpis ultrices, porttitor eros sed, placerat justo. Fusce consequat turpis vel finibus maximus. Donec ullamcorper quam ut neque lacinia ornare. Ut dui velit, condimentum at tempus id, placerat in nulla. Nulla ac feugiat sem, in condimentum ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eget luctus nibh. Vestibulum sed sapien elit. Aenean volutpat, sapien vel egestas posuere, augue turpis volutpat justo, in varius eros ipsum porta velit. Curabitur eu turpis venenatis, congue est ut, placerat erat. Maecenas mollis malesuada convallis. Donec id magna dictum nunc elementum euismod. Proin sit amet venenatis felis.

Sed et tortor ut justo consectetur congue imperdiet in diam. Curabitur at elit non ligula tempor pellentesque a quis sem. Nulla vitae metus viverra, ornare elit eu, malesuada elit. Nulla aliquam justo tellus, eu congue turpis faucibus sed. Pellentesque tempor pulvinar tellus et rutrum. Vestibulum non nulla ligula. Sed auctor dolor quis neque pharetra tincidunt. Maecenas at orci ut justo pretium lacinia at eu erat. Pellentesque bibendum eleifend velit, non fermentum arcu tincidunt non. Quisque nec condimentum ex. Fusce tempor sit amet ligula quis
          </p>
        </ReactModal>
      </div>
    );
  }
}

export default Curator;