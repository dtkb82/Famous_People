module.exports = function(client){

	function findByName(name, callback) {
		const query = "SELECT * FROM famous_people WHERE last_name = $1 OR first_name = $1;";
		client.query(query, [name], callback);
	}

	return findByName


}