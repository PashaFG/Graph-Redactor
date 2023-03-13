//Icons
import UsersIcon from '@/components/UI/Icon/UsersIcon.vue'
import AnalyticsIcon from '@/components/UI/Icon/AnalyticsIcon.vue'
import GearIcon from '@/components/UI/Icon/GearIcon.vue'
import GearIcon24 from '@/components/UI/Icon/GearIcon24.vue'
import BranchIcon from '@/components/UI/Icon/BranchIcon.vue'
import ExelIcon from '@/components/UI/Icon/ExelIcon.vue'
import PrintIcon from '@/components/UI/Icon/PrintIcon.vue'
import SearchIcon from '@/components/UI/Icon/SearchIcon.vue'
import CrossIcon from '@/components/UI/Icon/CrossIcon.vue'
import MinusIcon from '@/components/UI/Icon/MinusIcon.vue'
import PlusIcon from '@/components/UI/Icon/PlusIcon.vue'
import DeleteIcon from '@/components/UI/Icon/DeleteIcon.vue'

//UI Components
import UserColorful from '@/components/UI/UserColorful.vue'
import GraphButton from '@/components/UI/GraphButton.vue'
import MainSelect from '@/components/UI/MainSelect.vue'
import MainInput from '@/components/UI/MainInput.vue'


//Modules components
import UserListComponents from '@/modules/UserList/components/UI/index.js'

const icons = [
  UsersIcon,
  AnalyticsIcon,
  GearIcon,
  GearIcon24,
  BranchIcon,
  ExelIcon,
  PrintIcon,
  SearchIcon,
  CrossIcon,
  MinusIcon,
  PlusIcon,
  DeleteIcon
]

const components = [
  UserColorful,
  MainButton,
  MainSelect,
  MainInput,
  CreateButton,
  GraphButton
]

const modules = [
  ...UserListComponents,
]

export default [
  ...icons,
  ...components,
  ...modules
]