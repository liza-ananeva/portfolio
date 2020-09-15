import './styles/main.pcss';
import './scripts/skills';
import './scripts/works';
import './scripts/reviews';

if (process.env.NODE_ENV === 'development') {
    require('file-loader!./index.pug');
}
