<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal"
				role="dialog"
				aria-labelledby="modalTitle"
				aria-describedby="modalDescription"
			>
			<header
			class="modal-header"
			id="modalTitle"
			>
				<slot name="header">
					{{selectedProfile.user_id? selectedProfile.user_id.firstname:''}} {{selectedProfile.user_id? selectedProfile.user_id.lastname:''}}      
				</slot>
			</header>
        
			<section class="modal-body" id="modalDescription">
				<div class="profile_row">
					<div class="field">Name:</div>
					<div class="value">
						{{selectedProfile.user_id? selectedProfile.user_id.firstname:''}} {{selectedProfile.user_id? selectedProfile.user_id.lastname:''}}
					</div>
				</div>

				<div class="profile_row">
					<div class="field">Birthdate:</div>
					<div class="value">
						{{selectedProfile.user_id? selectedProfile.user_id.birthdate:''}} {{selectedProfile.user_id? selectedProfile.user_id.age:''}} {{selectedProfile.about_details? selectedProfile.about_details.gender:''}}
					</div>
				</div>


				<div class="profile_row">
					<div class="field">About Myself:</div>
					<div class="value">
						{{selectedProfile.about_details? selectedProfile.about_details.about_myself:''}}
					</div>
				</div>

				<div class="profile_row">
					<div class="field">Looking For:</div>
					<div class="value">
						{{selectedProfile.about_details? selectedProfile.about_details.looking_for_details:''}}
					</div>
				</div>


				<div class="profile_row">
					<div class="field">Education:</div>
					<div class="value">
						{{selectedProfile.about_details? selectedProfile.about_details.undergraduate_degree:''}} {{selectedProfile.about_details? selectedProfile.about_details.undergraduate_institute_details:''}}
						{{selectedProfile.about_details.undergraduate_degree && selectedProfile.about_details.graduate_degree? ',':'' }}
						{{selectedProfile.about_details? selectedProfile.about_details.graduate_degree:''}} {{selectedProfile.about_details? selectedProfile.about_details.graduate_institute_details:''}}
					</div>
				</div>


				<div class="profile_row">
					<div class="field">Work Location:</div>
					<div class="value">
						{{selectedProfile.about_details? selectedProfile.about_details.work_location_city:''}} {{selectedProfile.about_details? selectedProfile.about_details.work_location_country:''}}
					</div>
				</div>


				<div class="profile_row">
					<div class="field">About Family:</div>
					<div class="value">
						{{selectedProfile.family_details? selectedProfile.family_details.about_family:''}}
					</div>
				</div>

				<div class="profile_row">
					<div class="field">Family Location:</div>
					<div class="value">
						{{selectedProfile.family_details? selectedProfile.family_details.family_location_city:''}}
					</div>
				</div>

				<div class="profile_row">
					<div class="field">Father Occupation:</div>
					<div class="value">
						{{selectedProfile.family_details? selectedProfile.family_details.father_occupation:''}}
					</div>
				</div>

				<div class="profile_row">
					<div class="field">Mother Occupation:</div>
					<div class="value">
						{{selectedProfile.family_details? selectedProfile.family_details.mother_occupation:''}}
					</div>
				</div>


				<div class="profile_row">
					<div class="field">Religion:</div>
					<div class="value">
						{{selectedProfile.religion_details? selectedProfile.religion_details.religion:''}}
						{{selectedProfile.religion_details? selectedProfile.religion_details.caste:''}}
						{{selectedProfile.religion_details? selectedProfile.religion_details.sub_caste:''}}
					</div>
				</div>

				<div class="profile_row">
					<div class="field">Marital Status:</div>
					<div class="value">
						{{selectedProfile.about_details? selectedProfile.about_details.marital_status:''}}
					</div>
				</div>

				<div class="profile_row">
					<div class="field">Address:</div>
					<div class="value">
						{{selectedProfile.address_details? selectedProfile.address_details.address1:''}}
						{{selectedProfile.address_details? selectedProfile.address_details.address2:''}}
						{{selectedProfile.address_details? selectedProfile.address_details.city:''}}
						{{selectedProfile.address_details? selectedProfile.address_details.state:''}}
						{{selectedProfile.address_details? selectedProfile.address_details.zip:''}}
						{{selectedProfile.address_details? selectedProfile.address_details.country:''}}
						
					</div>
				</div>

			</section>
        
			<footer class="modal-footer">
				<slot name="footer">
					<button
					type="button"
					class="btn-green"
					@click="close"
					aria-label="Close modal"
					>
						Close
					</button>
				</slot>
			</footer>
		</div>
    </div>
  
	</transition>
</template>

<script>
	export default {
		name: 'modal',
		props: ['selectedProfile'],

		methods: {
			close() {
				this.$emit('close');
			},
		},
  };
</script>


<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal {
		background: #FFFFFF;
		box-shadow: 2px 2px 20px 1px;
		overflow-x: auto;
		display: flex;
		flex-direction: column;
	}

	.modal-header,
		.modal-footer {
		padding: 15px;
		display: flex;
	}

	.modal-header {
		border-bottom: 1px solid #eeeeee;
		color: #4AAE9B;
		justify-content: space-between;
	}

	.modal-footer {
		border-top: 1px solid #eeeeee;
		justify-content: flex-end;
	}

	.modal-body {
		position: relative;
		padding: 20px 10px;
	}

	.btn-close {
		border: none;
		font-size: 20px;
		padding: 20px;
		cursor: pointer;
		font-weight: bold;
		color: #4AAE9B;
		background: transparent;
	}

	.btn-green {
		color: white;
		background: #4AAE9B;
		border: 1px solid #4AAE9B;
		border-radius: 2px;
	}

	.profile_row {
		width: 800px;
		overflow:auto;
	}
	
	.field {
		width: 200px;
		float: left;
		font-weight: bold;
	}

	.value {
		width: 600px;
		float: right;
	}
</style>