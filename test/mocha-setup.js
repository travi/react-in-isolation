import chai from 'chai';
import sinon from 'sinon';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

sinon.assert.expose(chai.assert, {prefix: ''});
