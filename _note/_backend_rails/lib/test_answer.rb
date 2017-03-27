require 'pry-rails'

array = [{"id":1,"question":"Какого эффекта вы ожидаете?","answers":[{"id":1,"body":"сбросить лишний вес","checked":true},{"id":2,"body":"привести тело в форму","checked":true},{"id":3,"body":"улучшение самочуствия","checked":true},{"id":4,"body":"снять стресс","checked":true},{"id":5,"body":"уменьшение обьемов","checked":true},{"id":6,"body":"убрать растяжки на теле","checked":true}]},{"id":2,"question":"На какую часть тела хотите сделать акцент?","answers":[{"id":1,"body":"живот","checked":true},{"id":2,"body":"бока","checked":true},{"id":3,"body":"ягодицы","checked":true},{"id":4,"body":"бедра","checked":true},{"id":5,"body":"грудь","checked":false},{"id":6,"body":"руки","checked":true}]},{"id":3,"question":"Какие услуги вам интересны?","answers":[{"id":1,"body":"обертывание","checked":true},{"id":2,"body":"миостимуляция","checked":true},{"id":3,"body":"лифтинг","checked":false},{"id":4,"body":"кавитация","checked":true},{"id":5,"body":"прессотерапия","checked":true},{"id":6,"body":"массаж","checked":true}]},{"id":4,"question":"Какой массаж вам интересен?","answers":[{"id":1,"body":"баночный","checked":true},{"id":2,"body":"медовый","checked":true},{"id":3,"body":"антицеллюлитный","checked":true},{"id":4,"body":"бразильская попка","checked":true},{"id":5,"body":"массаж спины","checked":true},{"id":6,"body":"массаж шейно-воротниковой зоны","checked":false},{"id":7,"body":"массаж всего тела","checked":false},{"id":8,"body":"не интересен","checked":false}]},{"id":5,"question":"Удобное для вас время посещения?","answers":[{"id":1,"body":"c 10 до 13","checked":true},{"id":2,"body":"с 13 до 17","checked":true},{"id":3,"body":"с 17 до 21","checked":false}]},{"id":6,"question":"Сколько раз в неделю планируете посещать студию?","answers":[{"id":1,"body":"1","checked":false},{"id":2,"body":"2","checked":false},{"id":3,"body":"3","checked":false},{"id":4,"body":"больше 3","checked":true}]},{"id":7,"question":"Какая стоимость абонемента была бы для вас комфортна? (срок действия абонемента 3 месяца)","answers":[{"id":1,"body":"до 1000","checked":false},{"id":2,"body":"от 1000 до 2000","checked":false},{"id":3,"body":"от 2000 до 3000","checked":true},{"id":4,"body":"от 3000 до 4000","checked":false},{"id":5,"body":"от 5000 до 7000","checked":false},{"id":6,"body":"от 7000 до 10000","checked":false},{"id":7,"body":"больше 10000","checked":false},{"id":8,"body":"я хочу взять в рассрочку эту сумму","checked":false}]}]




values = []
array.each do |object|

  hash = {}
  question = object[:question]
  answers = []

  object[:answers].each do |answer|
    if answer[:checked] == true
      answers << answer[:body]
    end
  end

  hash[:question] = question
  hash[:answers] = answers
  values << hash

end

values.each do |value|
  puts "#{value[:question]} = #{value[:answers]}"
end

