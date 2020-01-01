##############################################################################################
############################# VUE, VUEX, MODAL DEMONSTRATION #################################
##############################################################################################

This project demonstrates how to use vue, vuex to build Front End UI to fetch user profiles 
and search through them using vue.

When you click on the "Shortlist Profile" button, the profile id gets shortlisted (the shortlisted 
profiles state is maintained using vuex). 

When you click on the "View Profile Details" button, modal opens up that displays details of the 
selected user profile. It also demonstrates how to pass profile data from parent component (Profiles) 
to child component (modal). You can find these components in components directory.

SearchForm component is embedded in the parent component (Profiles) to provide profiles search 
functionality where user  can search using different options. It filters the profiles as per the 
specified search criteria. On the top of the page, it also displays the number of profiles it found and
the number of filtered profiles it found.

It uses the REST API for profiles that is created here:

https://github.com/maksrane100/profile-rest-api


Please see the screenshots attached.

What is not done in this project:
Pagination