"use strict";

//////////////////////////////////////////
// Prey Process List Provider
// (c) 2011 - Fork Ltd.
// By Tomas Pollak - http://forkhq.com
// GPLv3 Licensed
//////////////////////////////////////////

var
    os_name = process.platform.replace('darwin', 'mac').replace('win32', 'windows'),
    os_functions = require("./platform/" + os_name);

exports.get_process_list = os_functions.get_process_list;

/**
 *
 **/
exports.get_parent_process_list = function(callback) {

	exports.get_process_list(function(err, list) {
		if (err) return callback(_error(err));

		var parents = [];

		list.forEach(function(p){
			if (p.ppid === 1)
    		//if(parents.indexOf(p.pid) == -1 && parents.indexOf(p.pid))
			parents.push(p);
		});

		// parents.forEach(function(p){
		// 	console.log(p.pid + " -> " + p.name);
		// 	console.log(p);
		// });

    callback(null, parents);

  });
};