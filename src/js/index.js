/** * Created with WebStorm. * User: RD-小小WEB * Date: 2016/5/8 * Time: 16:54 */

require('mod2')
require('mod3')

var i=0;
setInterval(()=>{
    document.body.innerHTML = ++i
},50)
