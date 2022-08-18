const j2m = require("../index");
const should = require('chai').should();
const fs = require('fs');
const path = require('path');

describe("md_to_html", () => {

    it('should exist', function() {
        should.exist(j2m.md_to_html(""));
    });

    it('should be a function', function() {
        j2m.md_to_html.should.be.a('function');
    });

    it('should provide html from md', function () {
        const md_str = fs.readFileSync(path.resolve(__dirname, 'test.md'),"utf8");
        const html_str = fs.readFileSync(path.resolve(__dirname, 'test_file.html'),"utf8");

        const html = j2m.md_to_html(md_str);
        html.should.eql(html_str);
    });
});

describe("jira_to_html", () => {

    it('should exist', function() {
        should.exist(j2m.jira_to_html(""));
    });

    it('should be a function', function() {
        j2m.jira_to_html.should.be.a('function');
    });

    it('should provide html from md', function () {
        const jira_str = fs.readFileSync(path.resolve(__dirname, 'test.jira'),"utf8");
        const html_str = fs.readFileSync(path.resolve(__dirname, 'test_file.html'),"utf8");

        const html = j2m.jira_to_html(jira_str);
        html.should.eql(html_str);
    });
});
