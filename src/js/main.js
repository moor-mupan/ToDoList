import '../css/main.css'

let $ = require('jquery')
$(() => {
	const $add = $('#add')
	const $addInput = $('#addInput')
	const $todo = $('#todo')
	const $done = $('#done')
	const $module = $('#module')
	const $close = $('#close')
	const $del = $('#del')
	const $toDone = $('#toDone')
	const $toNotDo = $('#toNotDo')
	let itemID = ''
	let cur = ''
	let nowID = ''

	$add.click(() => {
		let val = $addInput.val()
		if (val.trim() !== '') {
			itemID = guid()
			let dom = `<li id=${itemID}>${val}</li>`
			$todo.append(dom)
			$addInput.val('')
			todoHandle()
		} else {
			alert('输入代办内容')
		}
	})
	$toDone.click(() => {
		$done.append(cur)
		$('#todo>li').remove(`#${nowID}`)
		close()
	})
	$toNotDo.click(() => {
		$todo.append(cur)
		$('#done>li').remove(`#${nowID}`)
		close()
	})
	$del.click(() => {
		$('#done>li').remove(`#${nowID}`)
		$('#todo>li').remove(`#${nowID}`)
		close()
	})
	$close.click(() => {
		close()
	})

	function todoHandle() {
		let $li = $('li')
		let clientX = 0
		let clientY = 0

		$li.bind("contextmenu", function(e) {
			cur = e.currentTarget
			nowID = $(cur).attr('id')

			clientX = e.clientX
			clientY = e.clientY
			$module.css({
				display: 'inline-block',
				left: `${clientX}px`,
				top: `${clientY}px`
			})
			return false
		})
	}

	function close() {
		$module.css({
			display: 'none'
		})
	}

	function guid() {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			let r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
})
