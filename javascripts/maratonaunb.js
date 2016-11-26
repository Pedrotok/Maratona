<!-- hide script from old browsers
function write_year(offset) {
	document.write(new Date().getFullYear() + offset);
}

function top_menu_item(page_name, menu_item) {
	// Define os itens do menu do topo da página
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

function header(dir_depth=0) {
	// Define o cabeçalho da página (inclusive todos os itens de menu)
	// O argumento indica a profundidade da página em relação ao diretório raiz para lidar com links relativos.
	// Esta gambiarra se fez necessária visto que o servidor do GitHub não processa adequadamente links absolutos como <a href="/index.html"></a>.
	// Certamente há uma forma "correta" de resolver isso, mas essa foi a implementação mais rápida.

	var i, rel_path = '';
	for (i = 0; i < dir_depth; i++)
		rel_path += '../'

	document.write('      <header id=\"main-header\" class=\"clearfix small\">\n')
	document.write('          <div id=\"header-full\" class=\"clearfix small\">\n')
	document.write('              <div id=\"header\" class=\"clearfix\">\n')
	document.write('                  <a href=\"http://cic.unb.br\" target=\"_self\" id=\"logo\"><img src=\"' + rel_path + 'images/UnB/CIC.png\" alt=\"Departamento de Ciência da Computação\" /></a>\n')
	document.write('                  <aside id=\"header-content\">a</aside>\n')
	document.write('              </div>\n')
	document.write('          </div>\n')
	document.write('          <nav id=\"nav\" class=\"clearfix\">\n')
	document.write('              <div id=\"nav-container\">\n')
	document.write('                  <ul id=\"nav-main\">\n')
	top_menu_item(rel_path + 'index.html', 'Início')
	top_menu_item(rel_path + 'informacoes.html', 'Informações')
	top_menu_item('http://icpc.baylor.edu/', 'ICPC')
	top_menu_item('http://maratona.ime.usp.br/', 'IME')
	top_menu_item(rel_path + 'unb.html', 'UnB')
	top_menu_item('https://www.facebook.com/maratonaunb/', '<img src=\"' + rel_path + 'images/icons/facebook.png\" width=\"15\" height=\"15\">')
	https://icpc.baylor.edu/img/icpc_gr.png
	document.write('                  </ul>\n')
	document.write('              </div>\n')
	document.write('          </nav>\n')
	document.write('      </header>\n')
}


function footer(dir_depth=0) {
	// Define o rodapé da página
	// O argumento indica a profundidade da página em relação ao diretório raiz para lidar com links relativos.
	// Esta gambiarra se fez necessária visto que o servidor do GitHub não processa adequadamente links absolutos como <a href="/index.html"></a>.
	// Certamente há uma forma "correta" de resolver isso, mas essa foi a implementação mais rápida.

	var i, rel_path = '';
	for (i = 0; i < dir_depth; i++)
		rel_path += '../'

	document.write('<footer id=\"main-footer\">\n')
	document.write('    </div>\n')
	document.write('    <div id=\"footer-copyright\">\n')
	document.write('        <div id=\"footer-copyright-content\" class=\"clearfix\">\n')
	document.write('            <img id=\"logo-footer\" src=\"' + rel_path + 'images/UnB/footer.png\"  alt=\"Departamento de Ciência da Computação\" />\n')
	document.write('            <p id=\"text-address\">Campus Darcy Ribeiro, CIC/EST, Asa Norte, Brasília, DF - 4466 - 70910-900 | +55 61 3107-3662 | +55 61 3107-3661</p>\n')
	document.write('            <p id=\"text-copyright\">Copyright ©\n')
	write_year(0)
	document.write('</script></p>\n')
	document.write('        </div>\n')
	document.write('    </div>\n')
	document.write('</footer>\n')
}

// end hiding script from old browsers -->