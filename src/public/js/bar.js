window.onload = function onLoad() {
  var rango1, rango2, rango3

  var bar1 = new ProgressBar.SemiCircle(contador1, {
    strokeWidth: 5,
    color: '#FFEA82',
    trailColor: 'rgba(255, 255, 255, 0.4)',
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false,
    },
    from: { color: '#FFFFFF' },
    to: { color: '#FFFFFF' },

    step: (state, bar1) => {
      bar1.path.setAttribute('stroke', state.color)
      var value = Math.round(bar1.value() * 35)
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

  var bar2 = new ProgressBar.SemiCircle(contador2, {
    strokeWidth: 5,
    color: '#FFEA82',
    trailColor: 'rgba(255, 255, 255, 0.4)',
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false,
    },
    from: { color: '#FFFFFF' },
    to: { color: '#FFFFFF' },

    step: (state, bar2) => {
      bar2.path.setAttribute('stroke', state.color)
      var maxValue = 100
      var value = Math.round(bar2.value() * maxValue)
      if (value === 0) {
        bar2.setText('')
      } else {
        bar2.setText(value + '%')
        var porcentaje = bar2.value()
        var diferencia = maxValue / (rango2 * maxValue)
        var riesgo
        if (rango2 > 0.9) {
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
        else if (rango2 > 0) riesgo = 'NORMAL'

        document.body.style.background = color
        document.getElementById('riesgo').innerHTML = riesgo //cambia texto del riesgo
      }

      bar2.text.style.color = state.color
      bar2.text.style.top = '0'
      bar2.text.style.fontSize = '8vw'
      bar2.text.style.fontWeight = 'bold'
    },
  })

  var bar3 = new ProgressBar.SemiCircle(contador3, {
    strokeWidth: 5,
    color: '#FFEA82',
    trailColor: 'rgba(255, 255, 255, 0.4)',
    trailWidth: 5,
    easing: 'easeInOut',
    duration: 1400,
    svgStyle: null,
    text: {
      value: '',
      alignToBottom: false,
    },
    from: { color: '#FFFFFF' },
    to: { color: '#FFFFFF' },

    step: (state, bar3) => {
      bar3.path.setAttribute('stroke', state.color)
      var value = Math.round(bar3.value() * 100)
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
  rango2 = Math.random() * 0.6
  rango3 = Math.random() * 0.4 + 0.4
  bar1.animate(rango1)
  bar2.animate(rango2)
  bar3.animate(rango3)
}
