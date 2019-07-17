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
        // console.log(this.state.alertas);
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
          console.log(data);
          // M.toast({html: 'Task deleted'});
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

                // <div key={aviso._id} style={{backgroundColor: "rgba(0,0,0,0.3)", paddingTop: "15px", margin: "10px auto", width: "98%", height: "auto"}} className="bloque2">
                //   <p style={{fontSize: "24px"}}>ALERTA #{index+1}</p>
                //   <br/>
                //   <div style={{margin:"10px 30px"}}>
                //     <button onClick={() => this.deleteAlerta(aviso._id)}>Descartar</button>
                //   </div>
                //   <br/>
                //   <p style={{textAlign: "justify", margin: "10px 30px"}}><b>Lugar:</b> {aviso.municipio} </p>
                //   <p style={{textAlign: "justify", margin: "10px 30px"}}><b>Fecha:</b> {aviso.fecha.slice(0,10)} </p>
                //   <p style={{textAlign: "justify", margin: "10px 30px"}}><b>Tipo:</b> {aviso.tipo} </p>
                //   <p style={{textAlign: "justify", margin: "10px 30px"}}><b>Descripción:</b> {aviso.descripcion} </p>
                //   <br/>
                // </div>

                // <tr key={task._id}>
                //   <td>{task.title}</td>
                //   <td>{task.description}</td>
                //   <td>
                //     <button onClick={() => this.deleteTask(task._id)} className="btn light-blue darken-4">
                //       <i className="material-icons">delete</i> 
                //     </button>
                //     <button onClick={() => this.editTask(task._id)} className="btn light-blue darken-4" style={{margin: '4px'}}>
                //       <i className="material-icons">edit</i>
                //     </button>
                //   </td>
                // </tr>
              )
            })
          }
      </div>
    )
  }
}

export default App;
