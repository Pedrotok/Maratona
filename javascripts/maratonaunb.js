<!-- hide script from old browsers
function write_year(offset) {
	document.write(new Date().getFullYear() + offset);
}

function write_menu_item(page_name, menu_item) {
	var url = window.location.pathname
	var current_item = ''

	if(url.endsWith(page_name))
		current_item = ' current-menu-item'

	document.write('                    <li class=\"menu-item')
	document.write(current_item)
	document.write('\"><a href=\"')
	document.write(page_name)
	document.write('\">')
	document.write(menu_item)
	document.write('</a></li>\n')
}

function header() {
	document.write('      <header id=\"main-header\" class=\"clearfix small\">\n')
	document.write('          <div id=\"header-full\" class=\"clearfix small\">\n')
	document.write('              <div id=\"header\" class=\"clearfix\">\n')
	document.write('                  <a href=\"http://cic.unb.br\" target=\"_self\" id=\"logo\"><img src=\"images/UnB/CIC.png\" alt=\"Departamento de Ciência da Computação\" /></a>\n')
	document.write('                  <aside id=\"header-content\">a</aside>\n')
	document.write('              </div>\n')
	document.write('          </div>\n')
	document.write('          <nav id=\"nav\" class=\"clearfix\">\n')
	document.write('              <div id=\"nav-container\">\n')
	document.write('                  <ul id=\"nav-main\">\n')
	write_menu_item('index.html', 'Início')
	write_menu_item('informacoes.html', 'Informações')
	write_menu_item('http://icpc.baylor.edu/', 'ICPC')
	write_menu_item('http://maratona.ime.usp.br/', 'IME')
	write_menu_item('unb.html', 'UnB')
	write_menu_item('https://www.facebook.com/maratonaunb/', '<img src=\"images/icons/facebook.png\" width=\"15\" height=\"15\">')
	document.write('                  </ul>\n')
	document.write('              </div>\n')
	document.write('          </nav>\n')
	document.write('      </header>\n')
}


function footer() {
	document.write('<footer id=\"main-footer\">\n')
	document.write('    </div>\n')
	document.write('    <div id=\"footer-copyright\">\n')
	document.write('        <div id=\"footer-copyright-content\" class=\"clearfix\">\n')
	document.write('            <img id=\"logo-footer\" src=\"images/UnB/footer.png\"  alt=\"Departamento de Ciência da Computação\" />\n')
	document.write('            <p id=\"text-address\">Campus Darcy Ribeiro, CIC/EST, Asa Norte, Brasília, DF - 4466 - 70910-900 | +55 61 3107-3662 | +55 61 3107-3661</p>\n')
	document.write('            <p id=\"text-copyright\">Copyright ©\n')
	write_year(0)
	document.write('</script></p>\n')
	document.write('        </div>\n')
	document.write('    </div>\n')
	document.write('</footer>\n')
}

// end hiding script from old browsers -->