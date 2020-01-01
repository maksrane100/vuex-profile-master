<template>
	<div>
		<h1 class="title">All Profiles</h1>
    	<p>Profiles : {{getNumberOfProfiles}}</p>
		<p>Shortlisted Profiles : {{getNumberOfShortlistedProfiles}}</p>
		<p>Filtered Profiles : {{this.searchedProfiles}}</p>
		
		<hr/>
		
		<SearchForm @search-profiles="setSearchFormSelection"></SearchForm>
		
		<hr/>
		
    	<table class="table is-striped">
		    <thead>
		      <tr>
		        <th>Name</th>
		        <th>Birthdate</th>
		        <th>Work Location</th>
				<th>Religion</th>
		        <th>Shortlist Profile</th>
				<th>View Profile Details</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr v-for="profile in profiles" track-by="_id">
		        <td>{{profile.user_id? profile.user_id.firstname:''}} {{profile.user_id? profile.user_id.lastname:''}} </td>
		         <td>{{profile.user_id.birthdate}} {{profile.user_id.age}} Years {{profile.about_details.gender}}</td>
		        <td>{{profile.about_details.work_location_country}} {{profile.about_details.work_location_city}}</td>
				<td>{{profile.religion_details.religion}} {{profile.religion_details.caste}} {{profile.religion_details.sub_caste}}</td>
		        <td><button @click='shortlistProfile(profile)' class='button is-info'>Shortlist Profile</button></td>
				<td><button @click="showModal(profile)" class='button is-info'>View Profile Details</button></td>
		      </tr>
		    </tbody>
		</table>

		<modal v-show="isModalVisible" @close="closeModal" v-bind:selectedProfile="selectedProfile" />
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import modal from './modal.vue';
import axios from 'axios';
import SearchForm from './SearchForm.vue';

export default {
	name: 'app',
  
	components: {
		modal, SearchForm
    },
	
	data() {
		return {
			profiles:[],
			selectedProfile			: {},
			searchCountryString: "",
			searchWorkCityString: "",
			searchReligionString: "",
			searchMaritalStatusString: "",
			searchedProfiles			:0,
			isModalVisible: false
		}
	},
  
  
	computed: mapGetters({
		getNumberOfProfiles: 'getNumberOfProfiles',
		getNumberOfShortlistedProfiles:'getNumberOfShortlistedProfiles'
	}),
  
  
	created() {
      console.log('created called.');
    },
	
	mounted () {
		axios
		.get('http://localhost:3001/profiles')
		.then(response => (this.profiles= response.data));	
	},
  
	methods: {
   
		showModal(profile) {
			this.selectedProfile=profile;
			this.isModalVisible = true;
		},
		
		closeModal() {
			this.isModalVisible = false;
		},
	  
	  
		setSearchFormSelection(searchCountryString,searchWorkCityString,searchReligionString,searchMaritalStatusString) {
			this.searchCountryString= searchCountryString;
			this.searchWorkCityString= searchWorkCityString;
			this.searchReligionString= searchReligionString;
			this.searchMaritalStatusString= searchMaritalStatusString;
			this.searchProfiles();
        },
			
		searchProfiles() {
			var query="";
			if(this.searchCountryString!=""){
				query+="?&country="+this.searchCountryString
			}
			if(this.searchWorkCityString!=""){
				query+="?&workcity="+this.searchWorkCityString
			}
			if(this.searchReligionString!=""){
				query+="?&religion="+this.searchReligionString
			}
			if(this.searchMaritalStatusString!=""){
				query+="?&maritalstatus="+this.searchMaritalStatusString
			}
			if(query===''){
				axios
				.get('http://localhost:3001/profiles')
				.then(response => {this.profiles= response.data; this.searchedProfiles=response.data.length;});
			} else {
				axios
				.get('http://localhost:3001/profiles/common/search?'+query)
				.then(response => {this.profiles= response.data; this.searchedProfiles=response.data.length;});
			}
		},
			
		viewProfileDetails(profile) {
			this.selectedProfile=profile;
			$bvModal.show('bv-modal-example');
		},
				
		...mapActions([
			'shortlistProfile'
		])
	}
}
</script>

<style lang="scss">

</style>
