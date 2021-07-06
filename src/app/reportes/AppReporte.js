import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      municipio: '',
      fecha: '',
      tipo: '',
      descripcion: '',
      _id: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.addAlerta = this.addAlerta.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  addAlerta(e) {
    e.preventDefault();
    console.log('Se llamo addAlerta...');
    if(this.state._id) {
      fetch(`api/alertas/${this.state._id}`, {
        method: 'PUT',
        body: JSON.stringify({
          municipio: this.state.municipio,
          fecha: this.state.fecha,
          tipo: this.state.tipo,
          descripcion: this.state.descripcion
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          window.M.toast({html: 'Alerta Updated'});
          this.setState({_id: '', municipio: '', tipo: '', fecha: '', descripcion: ''});
        });
    } else {
      fetch('api/alertas', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          alert('Las autoridades han sido informadas de su alerta.');
          this.setState({municipio: '', tipo: '', fecha: '', descripcion: ''});
          window.location.href="./alertas";
        })
        .catch(err => {
          console.error(err);
        });
    }

  }

  render() {
    return (
      <div>
        <form onSubmit={this.addAlerta} style={{width: '80%', margin:'auto'}}>
            <input required name="municipio" onChange={this.handleChange} value={this.state.municipio} style={{width: '100%', height: '30px'}} type="text" placeholder="Municipio"/>
            <input required name="fecha" onChange={this.handleChange} value={this.state.fecha} style={{width: '100%', height: '30px'}} type="date" placeholder="Fecha"/>
            <select required name="tipo" onChange={this.handleChange} value={this.state.tipo} style={{width: '100%', height: '30px'}}>
                <option defaultValue value="Indefinido">Elige el desastre</option>
                <option value="Inundación">Inundación</option>
                <option value="Terremoto">Terremoto</option>
                <option value="Tsunami">Tsunami</option>
                <option value="Incendio">Incendio</option>
                <option value="Deslizamiento">Deslizamiento</option>
                <option value="Tormenta">Tormenta</option>
                <option value="Huracan">Huracan</option>
            </select>
            <textarea required name="descripcion" onChange={this.handleChange} value={this.state.descripcion} style={{width: '100%', height: '150px', marginTop: '30px'}} placeholder="Descripción..."></textarea>
            <button style={{width: '100%', height: '30px', marginTop: '30px'}} type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}

export default App;
