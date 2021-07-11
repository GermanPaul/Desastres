window.onload = function onLoad() {
  /**
  NOTA: aqui dentro va el codigo copiado de la pagina de ejemplos
  https://kimmobrunfeldt.github.io/progressbar.js/

  progressbar.js@1.0.0 version is used
  Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
*/
  var rango1, rango2, rango3

  //BARRA1------------------------------------------
  var bar1 = new ProgressBar.SemiCircle(contador1, {
    //contador1: nombre del div
    strokeWidth: 5, //ancho del resultado
    color: '#FFEA82',
    trailColor: 'rgba(255, 255, 255, 0.4)', //color del riel
    trailWidth: 5, //ancho del riel
    easing: 'easeInOut',
    duration: 1400, //tiempo de duracion de animacion
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false,
    },
    from: { color: '#FFFFFF' }, //color inicial del resultado y del texto
    to: { color: '#FFFFFF' }, //color final del resultado y del texto

    // Set default step function for all animate calls
    step: (state, bar1) => {
      bar1.path.setAttribute('stroke', state.color)
      var value = Math.round(bar1.value() * 35) //100 es el numero limite del contador
      if (value === 0) {
        bar1.setText('')
      } else {
        bar1.setText(value + '&ordm')
      }

      bar1.text.style.color = state.color
      bar1.text.style.top = '0px'
      bar1.text.style.fontSize = '4vw'
      bar1.text.style.fontWeight = 'bold'
    },
  })

  //BARRA2------------------------------------------
  var bar2 = new ProgressBar.SemiCircle(contador2, {
    //contador1: nombre del div
    strokeWidth: 5, //ancho del resultado
    color: '#FFEA82',
    trailColor: 'rgba(255, 255, 255, 0.4)', //color del riel
    trailWidth: 5, //ancho del riel
    easing: 'easeInOut',
    duration: 1400, //tiempo de duracion de animacion
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false,
    },
    from: { color: '#FFFFFF' }, //color inicial del resultado y del texto
    to: { color: '#FFFFFF' }, //color final del resultado y del texto

    // Set default step function for all animate calls
    step: (state, bar2) => {
      bar2.path.setAttribute('stroke', state.color)
      var maxValue = 100 //100 es el numero limite del contador
      var value = Math.round(bar2.value() * maxValue)
      if (value === 0) {
        bar2.setText('')
      } else {
        bar2.setText(value + '%')
        //cambio del color de fondo--------------------------
        var porcentaje = bar2.value()
        var diferencia = maxValue / (rango2 * maxValue)
        var riesgo
        if (rango2 > 0.9) {
          //pasar de (azul)44,90,169 a (rojo)255,42,42
          var color =
            'rgb(' +
            (44 + Math.round(porcentaje * diferencia * Math.abs(255 - 44))) +
            ',' +
            (90 - Math.round(porcentaje * diferencia * Math.abs(42 - 90))) +
            ',' +
            (169 - Math.round(porcentaje * diferencia * Math.abs(42 - 169))) +
            ')'
          riesgo = 'INMINENTE'
          notificar()
        } else if (rango2 > 0.6) {
          //pasar de (azul)44,90,169 a (naranja)255,115,41
          var color =
            'rgb(' +
            (44 + Math.round(porcentaje * diferencia * Math.abs(255 - 44))) +
            ',' +
            (90 + Math.round(porcentaje * diferencia * Math.abs(115 - 90))) +
            ',' +
            (169 - Math.round(porcentaje * diferencia * Math.abs(41 - 169))) +
            ')'
          riesgo = 'PROBABLE'
        } else if (rango2 > 0.3) {
          //pasar de (azul)44,90,169 a (verde)101,181,73
          var color =
            'rgb(' +
            (44 + Math.round(porcentaje * diferencia * Math.abs(44 - 101))) +
            ',' +
            (90 + Math.round(porcentaje * diferencia * Math.abs(90 - 181))) +
            ',' +
            (169 - Math.round(porcentaje * diferencia * Math.abs(169 - 73))) +
            ')'
          riesgo = 'MODERADO'
        }
        //para menores a 30% permanece del color por defecto
        else if (rango2 > 0) riesgo = 'NORMAL'

        document.body.style.background = color //cambia color del body
        // console.log(color);
        // document.getElementById('header').style.backgroundColor = color;   //cambia color del header
        // document.getElementById('btn').style.color = color;   //cambia color del header
        document.getElementById('riesgo').innerHTML = riesgo //cambia texto del riesgo
      }

      bar2.text.style.color = state.color
      bar2.text.style.top = '0'
      bar2.text.style.fontSize = '8vw'
      bar2.text.style.fontWeight = 'bold'
    },
  })
  //BARRA3------------------------------------------
  var bar3 = new ProgressBar.SemiCircle(contador3, {
    //contador1: nombre del div
    strokeWidth: 5, //ancho del resultado
    color: '#FFEA82',
    trailColor: 'rgba(255, 255, 255, 0.4)', //color del riel
    trailWidth: 5, //ancho del riel
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false,
    },
    from: { color: '#FFFFFF' }, //color inicial del resultado y del texto
    to: { color: '#FFFFFF' }, //color final del resultado y del texto

    // Set default step function for all animate calls
    step: (state, bar3) => {
      bar3.path.setAttribute('stroke', state.color)
      var value = Math.round(bar3.value() * 100) //100 es el numero limite del contador
      if (value === 0) {
        bar3.setText('')
      } else {
        bar3.setText(value + '%')
      }

      bar3.text.style.color = state.color
      bar3.text.style.top = '0px'
      bar3.text.style.fontSize = '4vw'
      bar3.text.style.fontWeight = 'bold'
    },
  })

  bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif'
  bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif'
  bar3.text.style.fontFamily = '"Raleway", Helvetica, sans-serif'
  bar1.text.style.fontSize = '2rem'
  bar2.text.style.fontSize = '2rem'
  bar3.text.style.fontSize = '2rem'
  rango1 = Math.random() * 0.4 + 0.4
  rango2 = Math.random() * 0.6 //<--- control de riesgo
  rango3 = Math.random() * 0.4 + 0.4
  bar1.animate(rango1) // Number from 0.0 to 1.0
  bar2.animate(rango2) // Number from 0.0 to 1.0
  bar3.animate(rango3) // Number from 0.0 to 1.0
}
