<template>
    <v-dialog 
        v-model="_active"
        @click:outside="_setActive(false)"
        width = "500"
    >
        <flaire-card>
            <v-card class="mt-11" flat>
                <v-tabs 
                    centered="true" 
                    color="primaryRed"
                >
                    <v-tab class="log-title-screen-font">
                        Log In
                    </v-tab>
                    <v-tab-item>
                        <v-card class="mx-6 mb-6 mt-14" flat>
                            <v-text-field
                                class="rounded-button log-screen-font mb-7 mx-9"
                                label="Email"
                                persistent-hint="true"
                                hint="The one you signed up with"
                                outlined                            
                            ></v-text-field>
                            <v-text-field
                                class="rounded-button log-screen-font mb-6 mx-9"
                                label="Password"
                                persistent-hint="true"
                                hint="The one created on sign up"
                                outlined
                            ></v-text-field>
                            <v-spacer />
                            <v-card-actions class="justify-center">
                                <v-btn
                                    color="flaireBlack"
                                    width="100"
                                    height="45"
                                    class="flaireWhite--text log-screen-font rounded-button ma-6"
                                >Log In</v-btn>
                            </v-card-actions>
                            <v-spacer/>
                        </v-card>
                    </v-tab-item>
                    <v-tab class="log-title-screen-font">
                        Sign Up 
                    </v-tab>
                    <v-tab-item>
                        <v-card class="mx-6 mb-6 mt-14" flat>
                            <v-text-field
                                class="rounded-button log-screen-font mb-7 mx-9"
                                label="Name"
                                persistent-hint="true"
                                hint="How should we address you?"
                                outlined                            
                            ></v-text-field>
                            <v-text-field
                                class="rounded-button log-screen-font mb-6 mx-9"
                                label="Email"
                                persistent-hint="true"
                                hint="Type your current email"
                                outlined
                            ></v-text-field>
                            <v-text-field
                                class="rounded-button log-screen-font mb-6 mx-9"
                                label="Phone"
                                persistent-hint="true"
                                hint="This is how we keep you safe"
                                outlined
                            ></v-text-field>
                            <v-text-field
                                class="rounded-button log-screen-font mb-6 mx-9"
                                label="Password"
                                persistent-hint="true"
                                hint="Create a unique password"
                                outlined
                            ></v-text-field><v-text-field
                                class="rounded-button log-screen-font mb-6 mx-9"
                                label="Confirm Password"
                                persistent-hint="true"
                                hint="confirm that password"
                                outlined
                            ></v-text-field>
                            <v-spacer />
                            <v-card-actions class="justify-center">
                                <v-btn
                                    color="flaireBlack"
                                    width="100"
                                    height="45"
                                    class="flaireWhite--text log-screen-font rounded-button ma-6"
                                >Sign Up</v-btn>
                            </v-card-actions>
                            <v-spacer/>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </v-card>
        </flaire-card>
    </v-dialog>
</template>
<script>

import FlaireCard from '@/components/Global/FlaireCard.vue'
import  {mapMutations, mapGetters } from 'vuex';

export default {
    components: {
        FlaireCard
    },
    methods: {
        ...mapGetters({
            _active: "state/getSignUp"
        })
    },
    computed: {
        ...mapMutations({
            _setActive: "state/setSignUp"
        })
    }
    
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'HeroNew-Regular';
    src: url('../assets/fonts/HeroNew/HeroNewRegular.otf');
}
@font-face {
    font-family: 'HeroNew-Medium';
    src: url('../assets/fonts/HeroNew/HeroNewMedium.otf');
}
.log-title-screen-font {
    font-family: HeroNew-Medium;
    font-size: 17px;
}
.log-screen-font {
    font-family: HeroNew-Regular;
}
.rounded-card {
    border-radius: 30px;
}
.rounded-button {
    border-radius: 10px;
}
</style>