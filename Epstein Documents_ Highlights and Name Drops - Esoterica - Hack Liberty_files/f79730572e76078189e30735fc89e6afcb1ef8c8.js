/* Translation data for theme 4 (en)*/
const data = {"en":{"table_of_contents":"table of contents","insert_table_of_contents":"Insert table of contents","jump_bottom":"Jump to end","toggle_toc":{"show_timeline":"Timeline","show_toc":"Contents"}}};

for (let lang in data){
  let cursor = I18n.translations;
  for (let key of [lang, "js", "theme_translations"]){
    cursor = cursor[key] ??= {};
  }
  cursor[4] = data[lang];
}
