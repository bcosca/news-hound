'use strict';

window.ICU=window.ICU || {

  format() {
    let regex=/\{\s*(\d+)\s*(?:,\s*(\w+)\s*(?:,\s*((?:\w+(?:\s*\{.+?\}\s*,?\s*)?)*)(?:,\s*(.+?))?)?)?\s*\}/g,
        str=arguments[0],
        match=regex.exec(arguments[0]),
        pos,
        options,
        stamp;
    while (match) {
      pos=parseInt(match[1])+1;
      if (pos in arguments) {
        if (match.length>1 && match[2]) {
          let args=[
            navigator.language ||
            navigator.userLanguage
          ];
          switch (match[2]) {
          case 'number':
            if (match.length>2 && match[3])
              switch (match[3]) {
              case 'integer':
                arguments[pos]=parseInt(arguments[pos]);
                break;
              case 'currency':
                options={
                  style:'decimal',
                  maximumFractionDigits:2
                };
                break;
              case 'percent':
                options={ style:'percent' };
                break;
              }
            if (options)
              args.push(options);
            str=str.replace(
              match[0],
              arguments[pos].
                toLocaleString.apply(arguments[pos],args)
            );
            break;
          case 'date':
            stamp=new Date(arguments[pos]*1e3);
            if (match.length>2 && match[3]) {
              options={
                year:'numeric',
                month:'numeric',
                day:'numeric'
              };
              switch (match[3]) {
              case 'long':
                options.month='long';
                break;
              case 'full':
                options.weekday='long';
                break;
              }
            }
            if (options)
              args.push(options);
            str=str.replace(
              match[0],
              stamp.toLocaleDateString.apply(stamp,args)
            );
            break;
          case 'time':
            stamp=new Date(arguments[pos]*1e3);
            if (match.length>2 && match[3] &&
              /long/.test(match[3]))
              options={
                hour:'2-digit',
                minute:'2-digit',
                second:'2-digit'
              };
            else
              options={
                hour12:false
              };
            args.push(options);
            str=str.replace(
              match[0],
              stamp.toLocaleTimeString.apply(stamp,args)
            );
            break;
          case 'plural':
            if (match.length>2 && match[3]) {
              let pattern=/(\w+)(?:\s*\{\s*(.+?)\s*\})/g,
                  tmp=pattern.exec(match[3]),
                  ord=['zero','one','two'],
                  data;
              while (tmp) {
                if (arguments[pos] in ord &&
                  tmp[1]==ord[arguments[pos]] ||
                  /other/.test(tmp[1])) {
                  data=tmp[2].replace('#',arguments[pos]);
                  break;
                }
                tmp=pattern.exec(match[3]);
              }
              str=str.replace(match[0],data);
            }
            break;
          }
        }
        else
          str=str.replace(match[0],arguments[pos]);
      }
      match=regex.exec(arguments[0]);
    }
    return str;
  }

};
