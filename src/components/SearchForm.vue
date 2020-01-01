<template>
    <div>
        <div class="row top-space">
            <div class="row col-6 col-md-4 col-lg-3">
                <div class="title">Search Profiles</div>
            </div>
        </div>
        
		<div class="row">
			<div class="row col-6 col-md-4 col-lg-3">
                <div class="field">Country:</div>
				<div class="value">
					<select v-model="searchCountryString">
						<option v-bind:value="IN">India</option>
						<option v-bind:value="US">US</option>					
					</select>
				</div>			
            </div>
            <div class="row col-6 col-md-4 col-lg-3">
                <div class="field">Work City:</div>
				<div class="value">
				<input type="text" placeholder="Search By Work City" tabindex="5" v-model="searchWorkCityString">
				</div>
            </div>
			<div class="row col-6 col-md-4 col-lg-3">
                <div class="field">Religion:</div>
				<div class="value">
					<select v-model="searchReligionString">
						<option selected>Hindu</option>
						<option>Christian</option>
						<option>Buddhist</option>
					</select>
				</div>
            </div>
			<div class="row col-6 col-md-4 col-lg-3">
                <div class="field">Marital Status:</div>
				<div class="value">
					<select v-model="searchMaritalStatusString">
						<option>Never Married</option>
						<option>Divorced</option>
						<option>Widow</option>
					</select>
				</div>
            </div>
            <div class="row col-3 col-md-2">
                <button tabindex="6" @click="search">Search</button>
                <button tabindex="6" @click="clearFilter">Clear</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchForm",
        data() {
            return {
                searchCountryString: "",
				searchWorkCityString: "",
				searchReligionString: "",
				searchMaritalStatusString: ""
            }
        },
        methods: {
            search() {
                this.$emit("search-profiles", this.searchCountryString,this.searchWorkCityString,this.searchReligionString,this.searchMaritalStatusString);
            },
            clearFilter() {
                
				this.searchCountryString= "";
				this.searchWorkCityString= "";
				this.searchReligionString= "";
				this.searchMaritalStatusString= "";
                this.$emit("search-profiles", "","","","");

            }
        }
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
	font-size: 18px;
	color:#0384FE;
	margin: 4px;
}

.row {
	overflow:auto;
	margin: 4px;
}

.field {
	width: 200px;
	float: left;
	margin: 4px;
}

.value {
	width: 600px;
	float: left;
	margin: 4px;
}
</style>