import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      alertas: []
    };
  }

  componentDidMount() {
    this.fetchAlertas();
  }

  fetchAlertas() {
    fetch('/api/alertas')
      .then(res => res.json())
      .then(data => {
        this.setState({alertas: data});
      });
  }

  deleteAlerta(id) {
    if(confirm('¿Está seguro de eliminar este registro?')) {
      fetch(`/api/alertas/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          alert('La alerta ha sido eliminada.');
          this.fetchAlertas();
        });
    }
  }

  render() {
    return (
      <div style={{width:"100%"}}>
          { 
            this.state.alertas.map((aviso,index) => {
              return (
                <div key={aviso._id} className="growC">
                  <div className="growD">
                    <p className="gTitle">ALERTA #{index+1}</p>
                    <div style={{textAlign: "center"}}>
                        <div style={{display: "inline-block"}}>
                            <button className="gButton" onClick={() => this.deleteAlerta(aviso._id)}>Descartar</button>
                        </div>    
                    </div>
                    <br/>
                    <p className="gText"><b>Lugar:</b> {aviso.municipio} </p>
                    <p className="gText"><b>Fecha:</b> {aviso.fecha.slice(0,10)} </p>
                    <p className="gText"><b>Tipo:</b> {aviso.tipo} </p>
                    <p className="gText"><b>Descripción:</b> {aviso.descripcion} </p>
                    <br/>
                  </div>
                </div>
              )
            })
          }
      </div>
    )
  }
}

export default App;
